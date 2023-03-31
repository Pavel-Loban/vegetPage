import { useSelector } from "react-redux";

export function useAuth () {
    const {email,token, id, nameUser } = useSelector(state => state.user)
    return {
        isAuth: !!email,
        email,
        token,
        id,
        nameUser,
    };
}