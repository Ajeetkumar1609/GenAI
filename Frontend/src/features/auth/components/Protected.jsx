import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import Loader from "../../../components/Loader";

const Protected = ({children}) => {

    const {loading, user} = useAuth();

    if(loading) {
        return <Loader title="Loading..." message="Please wait while we set up your account." />
    }

    if(!user) {
        return <Navigate to={"/login"} />
    }

    return children
}

export default Protected;