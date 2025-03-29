export const formatTime = (seconds: number): string => {
  const rounded = Math.round(seconds * 1000) / 1000;
  const absSeconds = Math.abs(rounded);
  const minutes = Math.floor(absSeconds / 60);
  const remainingSeconds = Math.floor(absSeconds % 60);
  const milliseconds = Math.round((absSeconds % 1) * 1000);

  const mm = String(minutes).padStart(2, "0");
  const ss = String(remainingSeconds).padStart(2, "0");
  const mmm = String(milliseconds).padStart(3, "0");

  return `${rounded < 0 ? "-" : ""}${mm}:${ss}:${mmm}`;
};
