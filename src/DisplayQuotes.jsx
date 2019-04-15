import  React  from  'react';

const  DisplayQuotes = ({ quotes }) => {
    return (
        <div  className="DisplayQuotes">
            <img  src={quotes.image}  alt="pictur"  />
            <ul>
                <li>Character: {quotes.character}</li>
                <li>Quote: {quotes.quote} </li>
                <li> Direction: {quotes.characterDirection}</li>
            </ul>
        </div>
    );
};

export  default  DisplayQuotes;