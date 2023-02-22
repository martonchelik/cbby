import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

/*
<input onChange={(event)=>checkMade(event.target.value)} value={made}/>
                            <div className="Suggestions">
                                {suggestions && suggestions.map((suggestion, index)=>(
                                    <div key={index} className="suggestion" onClick={() => onSuggestHandler(suggestion.made)}>
                                        <div>{suggestion.made}</div>
                                    </div>))}
                                {suggestions && cars.map((car, index)=>(
                                    <div key={index} className="suggestion" onClick={() => onSuggestHandler(car.made)}>
                                        <div>{car.made}</div>
                                    </div>))}
                            </div>

                    onChange={(event) => val(event.target.value)}

                    {option.made===madeval ? (option.model):() }

{cars.map(car=>(<div>{car.made}</div>))}


onChange={(event) => setMade(event.target.value)}


                    onChange={(event) => val(event.target.value)}


    const [suggestions, setSuggestions] = useState(carsmade);
    const checkMade = (made) => {
        setMade(made)
        let matches = []
        if (made.length > 0) {
            matches = cars.filter(car =>{
                const regex = new RegExp(`${made}`, "gi")
                return car.made.match(regex)
            })
        }
        setSuggestions(matches)
    }
    const onSuggestHandler = (made) => {
        setMade(made)
        setSuggestions(carsmade)
    }
    console.log(suggestions)
 */

