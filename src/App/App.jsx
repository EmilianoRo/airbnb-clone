import Grid from "./Grid"
import Navbar from "./Navbar"
import data from "../data"
import Card from "./Cards"

function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })  

    return (
        <div className="page">
            <Navbar/>
            <Grid/>
            <section className="card-list">
                {cards}
            </section>
        </div>
    )
}

export default App