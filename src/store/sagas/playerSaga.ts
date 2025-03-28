import { put, select, takeEvery } from "redux-saga/effects";
import {
  setCurrentEvent,
  showRectangle,
  hideRectangle,
  setCurrentTime,
} from "../actions/playerActions";
import { SET_CURRENT_TIME, SET_CURRENT_EVENT } from "../constants";
import { RootState, FormattedEvent } from "../../types/types";
import { selectEvents } from "../selectors/analytics";
import { selectIsPlaying } from "../selectors/player";

function* handleTimeUpdateSaga(action: ReturnType<typeof setCurrentTime>) {
  const events: FormattedEvent[] = yield select((state: RootState) =>
    selectEvents(state)
  );
  const isPlaying: boolean = yield select((state: RootState) =>
    selectIsPlaying(state)
  );

  const time = action.payload;
  const matchingEvent = events.find(
    (event) =>
      time >= event.timestamp && time <= event.timestamp + event.duration
  );

  if (matchingEvent && isPlaying) {
    yield put(setCurrentEvent(matchingEvent));
    yield put(showRectangle());
  } else if (!matchingEvent && isPlaying) {
    yield put(hideRectangle());
  }
}

function* handleEventChangeSaga(action: ReturnType<typeof setCurrentEvent>) {
  if (action.payload) {
    yield put(showRectangle());
  } else {
    yield put(hideRectangle());
  }
}

export function* watchPlayerSaga() {
  yield takeEvery(SET_CURRENT_TIME, handleTimeUpdateSaga);
  yield takeEvery(SET_CURRENT_EVENT, handleEventChangeSaga);
}
