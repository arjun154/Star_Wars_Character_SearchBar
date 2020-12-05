import React from "react";
import Styles from "./personDetails.module.css";

export default function Index({ person }) {
  return (
    <div className={Styles.root}>
      <div className={Styles.left}>
        <div className={Styles.head}>{person.name}</div>
        <div>
          <div className={Styles.box}>
            <span className={Styles.text}>Birth Year</span>
            <span className={Styles.data}>{person.birth_year}</span>
          </div>
          <div className={Styles.box}>
            <span className={Styles.text}>Eye Color</span>
            <span className={Styles.data}>{person.eye_color}</span>
          </div>
          <div className={Styles.box}>
            <span className={Styles.text}>Height</span>
            <span className={Styles.data}>{person.height}</span>
          </div>
          <div className={Styles.box}>
            <span className={Styles.text}>Gender</span>
            <span className={Styles.data}>{person.gender}</span>
          </div>
          <div className={Styles.box}>
            <span className={Styles.text}>Mass</span>
            <span className={Styles.data}>{person.mass}</span>
          </div>

          <div className={Styles.box}>
            <span className={Styles.text}>Hair Color</span>
            <span className={Styles.data}>{person.hair_color}</span>
          </div>
          <div className={Styles.box}>
            <span className={Styles.text}>Skin Color</span>
            <span className={Styles.data}>{person.skin_color}</span>
          </div>
        </div>
      </div>
      <div className={Styles.right}>
        <img
          src="https://i.pinimg.com/originals/e9/70/75/e9707592960d07392c6e76f929fb177a.jpg"
          alt="logo"
          height="500px"
          width="80%"
        ></img>
      </div>
    </div>
  );
}
