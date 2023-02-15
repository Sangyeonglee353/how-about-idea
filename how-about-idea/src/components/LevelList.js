import classes from "./LevelList.module.css";
import LevelButton from "./LevelButton";

const LevelList = () => {
  return (
    <ul className={classes["level-list"]}>
      <LevelButton level="1" />
      <LevelButton level="2" />
      <LevelButton level="3" />
    </ul>
  );
};

export default LevelList;
