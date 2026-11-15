import type { Alert } from "../interfaces/Alert";
import "./AlertSummary.css";

type Severity = Alert["severity"];
type AlertSummaryProps = {
  severityCounts: Record<Severity, number>;
  resolvedCount: number;
};
const AlertSummary = ({ severityCounts, resolvedCount }: AlertSummaryProps) => {
  return (
    <div className="alert-summary-container">
      <div className="alert-summary-securityAlerts">Security Alerts</div>
      <div className="alert-summary">
        {(Object.keys(severityCounts) as Severity[]).map((severityKey) => (
          <div key={severityKey} className="alert-severity-count">
            <div className="alert-severity-key">{severityKey}</div>
            <div className="alert-severity-value">{severityCounts[severityKey]}</div>
          </div>
        ))}
        <div className="alert-resolved-count">
          <div className="alert-resolved-key">Resolved</div>
          <div className="alert-resolved-value">{resolvedCount}</div>
        </div>
      </div>
    </div>
  );
};

export default AlertSummary;
