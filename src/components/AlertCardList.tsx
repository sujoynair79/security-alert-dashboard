import type { Alert } from "../interfaces/Alert";
import AlertCard from "./AlertCard";

type AlertCardListProps = {
  alerts: Alert[];
  onResolveClick: (id: number) => void;
};

const AlertCardList = ({ alerts, onResolveClick }: AlertCardListProps) => {
  return (
    <>
      {alerts.map((alert) => (
        <AlertCard key={alert.id} alert={alert} onResolveClick={onResolveClick} />
      ))}
    </>
  );
};

export default AlertCardList;
