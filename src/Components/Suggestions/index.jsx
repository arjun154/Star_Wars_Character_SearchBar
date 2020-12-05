import React from "react";
import { useHistory } from "react-router-dom";
import Styles from "./suggestions.module.css";
export default function Index({ data, active, setActive }) {
  const history = useHistory();

  const handleClick = () => {
    let arr = data[active - 1].url.split("/");
    let id = arr[arr.length - 2];
    history.push(`/person/${id}`);
  };

  return (
    <div className={Styles.suggestionBox}>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={item.name}
            onMouseOver={() => setActive(index + 1)}
            onClick={handleClick}
            className={active === index + 1 ? Styles.active : Styles.nonActive}
          >
            {item.name}
          </div>
        ))
      ) : (
        <div>No Items found</div>
      )}
    </div>
  );
}
