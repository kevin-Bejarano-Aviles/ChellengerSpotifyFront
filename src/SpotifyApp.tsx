import { AuthProvider } from "./context/AuthProvider"
import { AppRouter } from "./routes/AppRouter"




export const SpotifyApp = () => {
    return (
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    )
}


