import Footer from "./components/footer/footer";
import Header from "./components/header/header"
import Body from "./components/body/todobody";

const App = () => {
    return (
        <div className ="body grid">
            <div className="container">
                <Header/>
                <Body/>
                <Footer/>
            </div>
        </div>
    )
}

export default App;