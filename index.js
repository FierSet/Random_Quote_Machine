function App()
{
    const [quote, setquotes] = React.useState([]); {/* var set and geter*/}
    const [randomquote, setrandomquotes] = React.useState([]); {/* var set and geter*/}
    /* var vector*/
    const Colors =  
    [
        "#16A085",
        "#27AE60",
        "#2C3E50",
        "#9B59B6",
        "#E74C3C",
        "#77B1A9"
    ];

    const [color, setColor] = React.useState([]);

    React.useEffect( () =>
    {
        async function fetchData()
        {
            const respose = await fetch("https://type.fit/api/quotes"); {/* extrac json in url*/}
            const data = await respose.json(); {/* to json*/}

            setquotes(data); {/* set json to quotes*/}
            let random = Math.floor(Math.random() * data.length); {/* max value with limit of data values*/}
            setrandomquotes(data[random]); {/* set value to randomquote*/}
            
            let randomCOLOR = Math.floor(Math.random() * Colors.length); {/* max value with limit of colors values*/}
            setColor(Colors[randomCOLOR]); {/* set value to color*/}
        }
        fetchData();
    }, []);

    const getquote = () => {

        let random = Math.floor(Math.random() * quote.length); {/* max value with limit of quote values*/}
        setrandomquotes(quote[random]); {/* set value to randomquote*/}

        let randomCOLOR = Math.floor(Math.random() * Colors.length); {/* max value with limit of colors values*/}
        setColor(Colors[randomCOLOR]); {/* set value to color*/}
    }

    return (
        <div style = {{backgroundColor: color, minHeight: "100vh"}}>
            <div className = 'container pt-5'>

                <div className = 'jumbotron'>
                    <div className = 'card'>
                        <div className = 'card-header'>Random Quotes</div>

                        <div className = 'card-body'>
                            {/* extrac value on random quote*/}
                            {
                                randomquote ? (  
                                    <>
                                    <h5 className = 'card-title'>{randomquote.text}</h5>
                                    <h5 className = 'card-title'>- {randomquote.author || "N/A"}</h5>
                                    </>
                                ):(<h2>...</h2>)
                            }

                            <div className = 'row'>
                                {/* call metho getquote*/}
                                <button onClick = {getquote} className = 'btn btn-primary ml-3'>
                                    Random
                                </button>
                                <a href = ''></a>
                                <a href = ''></a>
                            </div>

                        </div>
                        
                    </div>
                </div>


            </div>
        </div>
    );
}

{/*apli react to html id*/}
ReactDOM.render( <App />, document.getElementById('app') );