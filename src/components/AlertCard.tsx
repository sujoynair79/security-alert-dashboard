import type { Alert } from "../interfaces/Alert";
import "./AlertCard.css";

type AlertCardProps = {
  alert: Alert;
  onResolveClick: (id: number) => void;
};
const AlertCard = ({ alert, onResolveClick }: AlertCardProps) => {
  const { id, title, severity, status, timestamp } = alert;
  return (
    <div className="alert-card-container">
      <div className="alert-card-left">
        <p className="alert-card-title">{title}</p>
        <div className="alert-card-info">
          <span className="alert-severity">{severity}</span>
          <span className="alert-status">{status}</span>
        </div>
        <p className="alert-time">{new Date(timestamp).toLocaleString()}</p>
      </div>
      {status !== "Resolved" && (
        <button className="alert-card-button" onClick={() => onResolveClick(id)}>
          Mark as resolved
        </button>
      )}
    </div>
  );
};

export default AlertCard;
