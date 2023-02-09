const Item = ({ dato }) => {
    const { title, thumbnailUrl } = dato
    return (
        <div>
            <h1>{title}</h1>
            <img src={thumbnailUrl} alt={thumbnailUrl} />
        </div>
    )

}

export default Item;