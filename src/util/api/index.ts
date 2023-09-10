const baseUrl = "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters";

const getCharacterList = (offset: number) => fetch(baseUrl + `?limit=99&orderBy=modified&offset=${offset}`);

const getCharacter = (id: string) => fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`);

const searchCharacter = (keyword: string) => fetch("https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?nameStartsWith=" + keyword);

export { getCharacterList, getCharacter, searchCharacter };
