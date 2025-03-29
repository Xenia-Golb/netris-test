import { put, takeLatest } from "redux-saga/effects";
import { FormattedEvent } from "../../types/types";
import { FETCH_EVENTS_REQUEST } from "../constants";
import {
  fetchEventsFailure,
  fetchEventsSuccess,
} from "../actions/analyticsActions";
import { data } from "../../data";

// const EVENTS_API_URL = "https://jsonkeeper.com/b/7T9N";

const formatTime = (ms: number): string => {
  const minutes = Math.floor(ms / 60000)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((ms % 60000) / 1000)
    .toString()
    .padStart(2, "0");
  const milliseconds = (ms % 1000).toString().padStart(3, "0");
  return `${minutes}:${seconds}:${milliseconds}`;
};

// Функция для сохранения в localStorage
const saveEventsToLocalStorage = (events: FormattedEvent[]) => {
  localStorage.setItem("events", JSON.stringify(events));
};

// Функция для получения событий из localStorage
const getEventsFromLocalStorage = (): FormattedEvent[] | null => {
  const events = localStorage.getItem("events");
  return events ? JSON.parse(events) : null;
};

function* fetchEventsSaga() {
  try {
    // Проверяем наличие событий в localStorage
    const localStorageEvents = getEventsFromLocalStorage();
    if (localStorageEvents) {
      // Если данные есть, сразу передаем их в store
      yield put(fetchEventsSuccess(localStorageEvents));
    } else {
      // Если данных нет в localStorage, делаем запрос к API
      //   const response: Response = yield call(fetch, EVENTS_API_URL);
      //   if (!response.ok) {
      //     throw new Error("Failed to fetch events");
      //   }
      //   const data: AnalyticsEvent[] = data;
      //   console.log(data);

      const formattedEvents: FormattedEvent[] = data.map((event, index) => ({
        ...event,
        formattedTime: formatTime(Number(event.timestamp)),
        id: `event-${index}`,
      }));

      formattedEvents.sort((a, b) => a.timestamp - b.timestamp);

      // Сохраняем отформатированные события в localStorage
      saveEventsToLocalStorage(formattedEvents);

      yield put(fetchEventsSuccess(formattedEvents));
    }
  } catch (error) {
    yield put(
      fetchEventsFailure(
        error instanceof Error ? error.message : "Unknown error"
      )
    );
  }
}

export function* watchAnalyticsSaga() {
  yield takeLatest(FETCH_EVENTS_REQUEST, fetchEventsSaga);
}
