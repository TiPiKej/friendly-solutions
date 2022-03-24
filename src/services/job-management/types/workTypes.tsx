type priorityTypes = "Low" | "Normal" | "High";
type statusTypes = "New" | "Confirmed" | "Canceled" | "Completed" | "Assigned" | "In progress";

export interface DataStructure {
  exec_time: number,
  response: ResponseData,
}

export interface ResponseData {
  current_page: number,
  from: number,
  last_page: number,
  per_page: number,
  to: number,
  total: number,
  data: Work[],
}

export interface Work {
  work_order_id: number,
  description: string,
  received_date: Date,
  assigned_to: AssignedWork[],
  status: statusTypes,
  priority: priorityTypes,
}

export interface AssignedWork {
  person_name: string,
  status: statusTypes,
}
