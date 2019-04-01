import React from "react";

const Quote = ({ quote, character, image }) => (
    <div class='col-lg-6 img-fluid img-thumbnail'>
        <figure>
            <img
                src={image} alt={character} class="image" />
            <figcaption>
                <blockquote>{quote}</blockquote>
                <cite>{character}</cite>
            </figcaption>
        </figure>
    </div>
);

export default Quote;