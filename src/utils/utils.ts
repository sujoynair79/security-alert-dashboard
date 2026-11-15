import type { Alert } from "../interfaces/Alert";

type Severity = Alert["severity"];

export const getAlertCountBySeverity = (alerts: Alert[]) => {
  return alerts.reduce<Record<Severity, number>>(
    (acc, currentAlert) => {
      const { severity } = currentAlert;
      acc[severity] += 1;
      return acc;
    },
    {
      Low: 0,
      Medium: 0,
      High: 0,
      Critical: 0,
    },
  );
};
