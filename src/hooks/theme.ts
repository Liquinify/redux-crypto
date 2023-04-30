import { useEffect } from "react"
import { selectTheme, setTheme } from "../store/features/theme-slice"
import { useAppDispatch, useAppSelector } from "./redux"

export const useTheme = () => {
    const dispatch = useAppDispatch()
    const theme = useAppSelector(selectTheme)

    useEffect(() => {
        document.body.setAttribute("data-theme", theme)
    }, [theme])

    const toggleTheme = () => {
        dispatch(setTheme(theme === "Light" ? "Dark" : "Light"))
    }

    return {theme, toggleTheme}
}