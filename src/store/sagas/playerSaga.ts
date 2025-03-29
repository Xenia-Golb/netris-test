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

// Сага для обработки обновлений времени в видео
function* handleTimeUpdateSaga(action: ReturnType<typeof setCurrentTime>) {
  const events: FormattedEvent[] = yield select(
    (state: RootState) => selectEvents(state) // Получаем список всех событий
  );

  const time = action.payload; // Текущее время видео

  // Находим событие, которое находится в пределах текущего времени
  const matchingEvent = events.find(
    (event) =>
      time >= event.timestamp && time <= event.timestamp + event.duration
  );

  if (matchingEvent) {
    // Если событие найдено, обновляем текущее событие и показываем прямоугольник
    yield put(setCurrentEvent(matchingEvent));
    yield put(showRectangle());
  } else {
    // Если события нет, скрываем прямоугольник
    yield put(hideRectangle());
  }
}

// Сага для обработки изменений текущего события
function* handleEventChangeSaga(action: ReturnType<typeof setCurrentEvent>) {
  if (action.payload) {
    // Если новое событие установлено, показываем прямоугольник
    yield put(showRectangle());
  } else {
    // Если события нет, скрываем прямоугольник
    yield put(hideRectangle());
  }
}

// Слушаем изменения времени и события
export function* watchPlayerSaga() {
  // takeEvery - слушаем все изменения времени и события
  yield takeEvery(SET_CURRENT_TIME, handleTimeUpdateSaga);

  // takeEvery - слушаем изменения текущего события
  yield takeEvery(SET_CURRENT_EVENT, handleEventChangeSaga);
}
