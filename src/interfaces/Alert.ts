export interface Alert {
  id: number;
  title: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  status: "Open" | "Investigating" | "Resolved";
  timestamp: string;
}
