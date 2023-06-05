import navigationContext from "./Navigation";
import { useContext } from "react";
function Route({ path, children }) {
    const { currentPath } = useContext(navigationContext);
    if (currentPath === path) {
        return children;
    }

    return null;
}

export default Route;