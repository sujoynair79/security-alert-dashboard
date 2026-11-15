import AlertCardList from "./AlertCardList";
import AlertSummary from "./AlertSummary";
import { alerts as alertList } from "../mocks/alertdata";
import "./AlertDashboard.css";
import { getAlertCountBySeverity } from "../utils/utils";
import { useState, type ChangeEvent } from "react";
import type { Alert } from "../interfaces/Alert";
import Filter, { type SeverityFilter } from "./Filter";

const AlertDashboard = () => {
  const [severity, setSeverity] = useState<SeverityFilter>("All");
  const [list, setList] = useState<Alert[]>(alertList);

  const filteredList = list.filter((alert) => severity === "All" || alert.severity === severity);
  const resolvedCount = list.filter((alert) => alert.status === "Resolved").length;

  const handleChangeEvent = (e: ChangeEvent<HTMLSelectElement>) =>
    setSeverity(e.target.value as SeverityFilter);

  const handleResolveClick = (id: number) =>
    setList((prevList) =>
      prevList.map<Alert>((alert) => (alert.id === id ? { ...alert, status: "Resolved" } : alert)),
    );

  const severityCounts = getAlertCountBySeverity(list);
  return (
    <div className="alert-dashboard-container">
      <AlertSummary severityCounts={severityCounts} resolvedCount={resolvedCount} />
      <Filter severity={severity} onChangeEvent={handleChangeEvent} />
      {filteredList.length === 0 ? (
        <div className="alert-dashboard-noAlerts">No Alerts to show</div>
      ) : (
        <AlertCardList alerts={filteredList} onResolveClick={handleResolveClick} />
      )}
    </div>
  );
};

export default AlertDashboard;
