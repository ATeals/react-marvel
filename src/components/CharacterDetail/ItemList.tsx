import { Items } from "@/util/type/Character";

const ItemList = ({ items }: { items: Items[] }) => {
    return (
        <ul style={{ padding: "10px" }}>
            {items.map(({ name, resourceURI }) => (
                <li
                    style={{ fontSize: "18px", margin: "10px 5px" }}
                    key={resourceURI}
                >
                    - {name}
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
