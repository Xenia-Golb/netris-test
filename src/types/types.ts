export interface Zone {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface AnalyticsEvent {
  timestamp: number;
  duration: number;
  zone: Zone;
}

export interface FormattedEvent extends AnalyticsEvent {
  formattedTime: string;
  id: string;
}

export interface AnalyticsState {
  events: FormattedEvent[];
  activeEvents: FormattedEvent[];
  loading: boolean;
  error: string | null;
  currentTime: number;
}

export interface PlayerState {
  currentTime: number;
  isPlaying: boolean;
  currentEvent: FormattedEvent | null;
  showRectangle: boolean;
}

export interface RootState {
  analytics: AnalyticsState;
  player: PlayerState;
}

export interface ApiResponse {
  events: AnalyticsEvent[];
}

export interface EventsListProps {
  events: FormattedEvent[];
  onEventClick: (event: FormattedEvent) => void;
  currentTime: number;
}
