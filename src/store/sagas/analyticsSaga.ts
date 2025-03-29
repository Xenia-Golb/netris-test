import { put, takeLatest } from "redux-saga/effects";
import { FormattedEvent } from "../../types/types";
import { FETCH_EVENTS_REQUEST } from "../constants";
import {
  fetchEventsFailure,
  fetchEventsSuccess,
} from "../actions/analyticsActions";
import { data } from "../../data";
import { formatTime } from "../../utils/formatTime";
import {
  getEventsFromLocalStorage,
  saveEventsToLocalStorage,
} from "../../storage";

// const EVENTS_API_URL = "https://jsonkeeper.com/b/7T9N";

function* fetchEventsSaga() {
  try {
    const localStorageEvents = getEventsFromLocalStorage();
    if (localStorageEvents) {
      yield put(fetchEventsSuccess(localStorageEvents));
    } else {
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
