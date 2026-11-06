/* Seconds as "m:ss", or "h:mm:ss" once the value reaches an hour. */
export function formatTime(seconds: number, withHours = false): string {
  const s = Math.max(0, Math.round(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (withHours || h > 0) {
    return `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }
  return `${m}:${String(sec).padStart(2, '0')}`;
}

export type Split = { km: number; time: number };

export type PaceResult = {
  pacePerKm: number;
  total: number;
  splits: Split[];
  speed: number;
};

/*
 * Splits land on whole kilometres plus the leftover distance. The final 0.0975 km
 * of a half marathon would otherwise report a finish several seconds early.
 */
export function computePace(distanceKm: number, totalSeconds: number): PaceResult | null {
  if (totalSeconds <= 0) return null;

  const pacePerKm = totalSeconds / distanceKm;
  const splits: Split[] = [];
  const step = distanceKm > 15 ? 5 : 1;
  for (let km = step; km < distanceKm; km += step) {
    splits.push({ km, time: pacePerKm * km });
  }
  splits.push({ km: distanceKm, time: totalSeconds });

  return { pacePerKm, total: totalSeconds, splits, speed: distanceKm / (totalSeconds / 3600) };
}

export function formatKm(km: number): string {
  return `${km % 1 === 0 ? km : km.toFixed(2)} km`;
}
