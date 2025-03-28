// Основные типы для событий аналитики
export interface Zone {
  left: number; // x-координата левого верхнего угла в пикселях
  top: number; // y-координата левого верхнего угла в пикселях
  width: number; // ширина зоны в пикселях
  height: number; // высота зоны в пикселях
}

export interface AnalyticsEvent {
  timestamp: number; // время события в миллисекундах от начала видео
  duration: number; // продолжительность события в миллисекундах
  zone: Zone; // зона в кадре, где произошло событие
}

export interface FormattedEvent extends AnalyticsEvent {
  formattedTime: string; // время в формате MM:SS:sss
  id: string; // уникальный идентификатор события
}

// Типы для состояния хранилища Redux
export interface AnalyticsState {
  events: FormattedEvent[];
  activeEvents: FormattedEvent[];
  loading: boolean;
  error: string | null;
  currentTime: number;
}

export interface PlayerState {
  currentTime: number; // текущее время видео в мс
  isPlaying: boolean; // играет ли видео в данный момент
  currentEvent: FormattedEvent | null; // текущее активное событие
  showRectangle: boolean; // отображать ли прямоугольник
}

// Общий тип состояния приложения
export interface RootState {
  analytics: AnalyticsState;
  player: PlayerState;
}

// Вспомогательные типы для API
export interface ApiResponse {
  events: AnalyticsEvent[];
}

export interface EventsListProps {
  events: FormattedEvent[];
  onEventClick: (event: FormattedEvent) => void;
  currentTime: number;
}
