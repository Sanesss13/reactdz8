import { useCallback, useState } from "react";
import { store } from "../../Store";
import { toggleShowNameAction } from "../../Store/profile/actions";

export const Profile = () => {
  const { getState } = store
  const { dispatch } = store
  const { showName, name } = getState();
  const [dummy, setDummy] = useState({});

  const handleToggleShowName = () => {
    dispatch(toggleShowNameAction())
    setDummy({});
  }
  return (
    <div>
      <h4>Profile</h4>
      <input
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={toggleShowNameAction}
      />
      <button onClick={toggleShowNameAction}>Показать имя</button>
      <div>{showName && name}</div>
    </div>
  );
}



