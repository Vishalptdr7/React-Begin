const Grocery=()=>{
    return (
        <div>
        <h1>Grocery List</h1>
        <form>
            <input type="text" placeholder="Add item" />
            <button type="submit">Add</button>
        </form>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        </div>
    )
}

export default Grocery;