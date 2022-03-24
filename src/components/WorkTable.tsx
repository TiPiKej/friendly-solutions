import { useEffect } from "react";
import { Work } from "../services/job-management/types/workTypes";

interface WorkTableProps {
  rows: Work[],
}

function WorkTable(props: WorkTableProps) {
  const { rows } = props;

  if (rows.length) return (
    <table>
      <tr>
        {Object.keys(rows[0]).map(name => (
          <th>{name}</th>
        ))}
      </tr>
      {rows.map(row => (
        <tr>
          <td>{row.work_order_id}</td>
          <td>{row.description}</td>
          <td>{row.received_date}</td>
          <td>
            {row.assigned_to.length ? row.assigned_to.map(assign => (
              <p>{assign.person_name}({assign.status})</p>
            )) : (
              <p>No one is assigned</p>
            )}
          </td>
          <td>{row.status}</td>
          <td>{row.priority}</td>
        </tr>
      ))}
    </table>
  )

  return (
    <p>No data</p>
  )
}

export default WorkTable;
