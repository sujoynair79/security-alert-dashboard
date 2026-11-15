import type { ChangeEvent } from "react";
import "./Filter.css";
import type { Alert } from "../interfaces/Alert";

export type SeverityFilter = Alert["severity"] | "All";

type FilterProps = {
  severity: SeverityFilter;
  onChangeEvent: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Filter = ({ severity, onChangeEvent }: FilterProps) => {
  return (
    <div className="filter-container">
      <div className="filter-recent-alerts">Recent Alerts</div>
      <div className="filter-recent-select">
        <label htmlFor="select-severity">Filter by severity</label>
        <select id="select-severity" value={severity} onChange={onChangeEvent}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Critical">Critical</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
