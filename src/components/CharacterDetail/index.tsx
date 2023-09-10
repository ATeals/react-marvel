import { Character } from "@/util/type/Character";
import ItemList from "./ItemList";

const CharacterDetail = ({ character }: { character: Character }) => {
    return (
        <div style={{ ...style.container, backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})` }}>
            <div style={{ background: "var(--color-bg)", width: "100%", borderTop: "5px solid red", transition: "background 250ms ease-in-out, transform 150ms ease" }}>
                <h1 style={{ ...style.title, textAlign: "center", padding: "10px", marginBottom: "50px" }}>{character.name}</h1>

                {character.description && (
                    <div>
                        <h1 style={style.title}>Discription</h1>
                        <p style={{ margin: "10px", padding: "10px" }}>{character.description}</p>
                    </div>
                )}

                <div>
                    <h1 style={style.title}>Comics</h1>
                    <ItemList items={character.comics.items} />
                </div>

                <div>
                    <h1 style={style.title}>Series</h1>
                    <ItemList items={character.series.items} />
                </div>

                <div>
                    <h1 style={style.title}>Stories</h1>
                    <ItemList items={character.stories.items} />
                </div>

                <div>
                    <h1 style={style.title}>More</h1>
                    <ul style={{ display: "flex", alignItems: "center" }}>
                        {character?.urls?.map(({ type, url }, index) => (
                            <li
                                style={{ margin: "10px", fontSize: "18px" }}
                                key={type + index}
                            >
                                <a
                                    href={url}
                                    target="_blank"
                                >
                                    {type}&rarr;
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const style = {
    container: {
        color: "var(--color-text)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        overflow: "scroll",
        width: "100%",
        paddingTop: "70vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
    },
    title: { fontSize: "32px", fontWeight: "600" },
} as any;

export default CharacterDetail;
