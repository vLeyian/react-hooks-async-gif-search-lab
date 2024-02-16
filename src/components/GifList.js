import React from "react";

function GifList({gifs}) {
    return(
        <div>
            <ul>
                {gifs.map((gif) => (
                    <li key={gif.url}>
                    <img src={gif.url} alt="gif" />
                    </li>
                ))}
                </ul>
        </div>

    )
}

export default GifList;