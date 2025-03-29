import { put, select, takeEvery } from "redux-saga/effects";
import { setCurrentTime, setActiveEvents } from "../actions/playerActions";
import { SET_CURRENT_TIME } from "../constants";
import { FormattedEvent } from "../../types/types";
import { selectEvents } from "../selectors/analytics";

function* handleTimeUpdateSaga(action: ReturnType<typeof setCurrentTime>) {
  try {
    const timeInSeconds = action.payload;
    const events: FormattedEvent[] = yield select(selectEvents);
    const epsilon = 0.1;

    const activeEvents = events.filter((event) => {
      const eventStart = event.timestamp;
      const eventEnd = event.timestamp + event.duration;
      return (
        timeInSeconds + epsilon >= eventStart &&
        timeInSeconds - epsilon <= eventEnd
      );
    });

    yield put(setActiveEvents(activeEvents));
  } catch (error) {
    console.error("Error in handleTimeUpdateSaga:", error);
  }
}
export function* watchPlayerSaga() {
  yield takeEvery(SET_CURRENT_TIME, handleTimeUpdateSaga);
}
