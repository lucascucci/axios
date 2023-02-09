import Item from "../Item/Item";

const ItemList = ({ dato }) => {
    return (
        <div>
            {dato.map((dato) => (
                <Item dato={dato} key={dato.id} />
            ))}
        </div>
    )
}

export default ItemList;