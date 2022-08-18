import React from "react";
import moment from "moment";

const SDKList = ({ sdks }) => {
  const lastSeen = (firstSeenDate, lastSeenDate) => {
    return moment(lastSeenDate).from(firstSeenDate);
  };

  return (
    <ul>
      {sdks.map((s) => (
        <li key={s.id}>
          {s.name} : {`${lastSeen(s.firstSeenDate, s.lastSeenDate)}`}
        </li>
      ))}
    </ul>
  );
};

export default SDKList;
