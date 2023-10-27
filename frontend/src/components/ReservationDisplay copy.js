// display all the categories
const ItemDisplay = ({list}) => {
    return (
        <div>
            <h2>List of items</h2>
            <ul>
            {list && 
                list.map((item) => (
                    <li key={item.id}>{item.price} | {item.name} | {item.description} | {item.category_id}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default ItemDisplay;