
let count = 0;
const appRoot = document.getElementById('app');
const addOne = () => { count++; renderCounterApp(); }
const minusOne = () => { count--; renderCounterApp(); }
const reset = () => { count = 0; renderCounterApp(); }
const renderCounterApp =() => {
    const templateTwo = (
        <div>
            <h1>{obj.userName.toUpperCase()}</h1>
            {(obj.age && obj.age >= 18) && <p>Age : {obj.age} Yrs</p>}
            {getLocation(obj.location)}
            {obj.options.length > 0 ? 'Options are listed below. :)' : 'No options are available :( '}
            <h2>Count : {count}</h2>
            <div className="form-group">
                <button onClick={addOne} className="btn btn-success p-m">+1</button>
                <button onClick={minusOne} className="btn btn-danger p-m">-1</button>
                <button onClick={reset} className="btn btn-info p-m">Reset</button>
            </div>
        </div>
    )
    ReactDOM.render(templateTwo, appRoot);
}
ReactDOM.render(template, appRoot);
renderCounterApp();