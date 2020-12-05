import React, { useEffect, useState } from "react";
import Styles from "./searchBox.module.css";
import Suggestions from "../Suggestions";
import { useThrottle } from "use-throttle";
import api from "../../utils/api";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Searchbox() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const ThrottledValue = useThrottle(query, 500);
  const [active, setActive] = useState(0);
  const history = useHistory();

  //useEffect will load the suggestions as user start typing
  useEffect(() => {
    if (ThrottledValue !== "") {
      setLoading(true);
      api
        .get("/", { params: { search: ThrottledValue } })
        .then((res) => setSuggestions(res.data.results))
        .then(() => setShowSuggestions(true))
        .then(() => setLoading(false))
        .catch((err) => console.log(err));
    } else {
      setSuggestions([]);
      setLoading(false);
      setShowSuggestions(false);
    }
  }, [ThrottledValue]);

  //handling key press to navigate in suggestions
  const handleKeyPress = (e) => {
    //arrow up/down button should select next/previous item
    if (e.keyCode === 38 && active > 0) {
      setActive((prevState) => prevState - 1);
    } else if (e.keyCode === 40 && active < suggestions.length) {
      setActive((prevState) => prevState + 1);
    } else if (e.keyCode === 13) {
      let arr = suggestions[active - 1].url.split("/");
      let id = arr[arr.length - 2];
      history.push(`/person/${id}`);
    } else if (e.keyCode === 40 && active >= suggestions.length) {
      setActive(0);
    } else if (e.keyCode === 38 && active <= 0) {
      setActive(suggestions.length);
    }
  };

  return (
    <div className={Styles.root}>
      <div
        className={
          suggestions.length > 0 || query ? Styles.inputDiv : Styles.inputDiv2
        }
        onKeyUp={handleKeyPress}
      >
        <input
          className={Styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name"
        />
        {loading && <CircularProgress size={15} color="secondary" />}
        {!loading && (
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/149/149852.svg"
            alt="search_icon"
            height="20px"
            width="20px"
          />
        )}
      </div>
      {showSuggestions && (
        <Suggestions data={suggestions} active={active} setActive={setActive} />
      )}
    </div>
  );
}
