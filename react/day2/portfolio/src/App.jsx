import Navbar from "./components/Navbar"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
    return (
        <>
            <Navbar />

            <div>
                <AppRoutes />
            </div>
        </>
    )
}

export default App


