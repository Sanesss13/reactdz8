import { useCallback, useState } from "react";
import { store } from "../../Store";
import { toggleUserNameAction } from "../../Store/profile/actions";

export const Profile = () => {
  const { getState } = store
  const { dispatch } = store
  const { showName, name } = getState();
  const [dummy, setDummy] = useState({});

  const handleToggleShowName = () => {
    dispatch(toggleUserNameAction())
    setDummy({});
  }
  return (
    <div>
      <h4>Profile</h4>
      <input
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={handleToggleShowName}
      />
      <button onClick={handleToggleShowName}>Показать имя</button>
      {showName && <div>{name}</div>}
    </div>
  );
}



