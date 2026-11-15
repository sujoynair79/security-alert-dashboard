import type { Alert } from "../interfaces/Alert";

export const alerts: Alert[] = [
  {
    id: 0,
    title: "Suspicious login attempt",
    severity: "Critical",
    status: "Open",
    timestamp: "2026-11-05T11:10:00Z",
  },
  {
    id: 1,
    title: "Unusual API activity",
    severity: "High",
    status: "Investigating",
    timestamp: "2026-11-05T08:15:00Z",
  },
  {
    id: 2,
    title: "Malware detected",
    severity: "Medium",
    status: "Resolved",
    timestamp: "2026-11-04T21:35:00Z",
  },
  {
    id: 3,
    title: "Email security detected",
    severity: "Critical",
    status: "Open",
    timestamp: "2026-11-04T18:45:00Z",
  },
  {
    id: 4,
    title: "Endpoint security detected",
    severity: "High",
    status: "Investigating",
    timestamp: "2026-11-03T14:20:00Z",
  },
  {
    id: 5,
    title: "AWS security detected",
    severity: "Medium",
    status: "Resolved",
    timestamp: "2026-11-03T09:30:00Z",
  },
];
