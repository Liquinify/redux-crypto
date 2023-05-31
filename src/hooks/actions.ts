import { bindActionCreators } from "redux";
import { favouriteActions } from "../store/features/favourite-slice";
import { useAppDispatch } from "./redux";

const actions = {
    ...favouriteActions
}

export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(actions, dispatch)
}