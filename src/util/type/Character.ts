interface Items {
    resourceURI: string;
    name: string;
}

interface ItemsObject {
    available: number;
    collectionURI: string;
    items: Items[];
    returned: number;
}

interface Url {
    type: string;
    url: string;
}

interface Character {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    resourceURI: string;
    comics: ItemsObject;
    series: ItemsObject;
    stories: ItemsObject;
    events: ItemsObject;
    urls: Url[];
}

export type { Character, ItemsObject, Items };
