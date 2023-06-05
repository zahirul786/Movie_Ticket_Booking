import { useContext } from 'react';
import navigationContext from './Navigation';
function Link({ to, children, item, onClick }) {
    const { navigate } = useContext(navigationContext);
    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        onClick(item);
        navigate(to);
    }
    return <a className="text-white hover:text-black p-2" onClick={handleClick} href={to} >{children}</a>
}

export default Link;