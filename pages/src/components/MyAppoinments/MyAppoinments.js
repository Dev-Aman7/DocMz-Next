import React from "react";
import { Table } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactComponent as Updown } from "../../assets/updown.svg";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      if (sortConfig.key === "Date") {
        sortableItems.sort((a, b) => {
          let dateA = new Date(a[sortConfig.key]);
          let dateB = new Date(b[sortConfig.key]);
          if (dateA < dateB) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (dateA > dateB) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      } else {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      }
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = key => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};
const MyAppoinments = props => {
  const { items, requestSort, sortConfig } = useSortableData(props.appoinments);
  return (
    <>
      <div className="myappoinments-container">
        <Table borderless>
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialist</th>
              <th>
                <div className="d-flex">
                  <div className="mr-2"> Date</div>
                  <div
                    style={{ width: "15px", height: "12px" }}
                    onClick={() => requestSort("Date")}
                  >
                    <Updown />
                  </div>
                </div>
              </th>

              <th>
                <div className="d-flex">
                  <div className="mr-2"> Time</div>
                  <div
                    style={{ width: "15px", height: "12px" }}
                    onClick={() => requestSort("Time")}
                  >
                    <Updown />
                  </div>
                </div>
              </th>
              <th>Staus</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-content-center">
                      {" "}
                      <div className="profile-img">
                        <img src={item.Photo} alt="profile" />
                      </div>
                      {item.Name}
                    </div>
                  </td>
                  <td>{item.Specialist}</td>
                  <td>{item.Date}</td>

                  <td>{item.Time}</td>
                  <td>
                    <div
                      className={
                        item.pending
                          ? "myappoinments-pending"
                          : "myappoinments-finished"
                      }
                    >
                      {" "}
                      {item.pending ? (
                        <FontAwesomeIcon icon={faClock} size="1x" />
                      ) : (
                        <FontAwesomeIcon icon={faCheck} size="1x" />
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default MyAppoinments;
