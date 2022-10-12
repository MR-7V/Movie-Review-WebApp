import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { Movies } from "./Movie/Movies";
const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }

    return (
        <Movies />
    )
}

export default Home
