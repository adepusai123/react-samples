console.log('REACT App  is running ! :)');
//JSX  - JavaScript XML
const obj = {
    userName: "Sai Kumar",
    age: 18,
    location: "Hyderbad",
    options: []
};
const getLocation = (location) => {
    if (location) {
        <p>Location: {location}</p>;
    }
}
const onSubmitForm = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        obj.options.push(option);
        e.target.elements.option.value =''; //clear the input value
        renderFormData();
    }
}
const resetOptions = () => {
    obj.options =[];
    renderFormData();
}
const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * obj.options.length);
    const option = obj.options[randomNum];
    alert(option);
}
const appRoot = document.getElementById('app');

const renderFormData = () => {
    const template = (<div>
        <h1>Indecision App!</h1>
        <p>{obj.userName  ? obj.userName : 'Annonymus'}</p>
        <p>{obj.options.length > 0 ?  'Here are options for you.' : "No ! options available"}</p>
        <button disabled = {obj.options.length === 0} onClick={makeDecision} className="btn btn-primary">What should i do ?</button>
        <button onClick={resetOptions} className="btn btn-danger">Clear</button>
        <ol>
           {
               obj.options.map((ele) => <li key={ele}>{ele}</li>)  
           }
        </ol>
        <form className="form-inline" onSubmit={onSubmitForm}>
        <div className="form-group">
            <input type="text" className="form-control" name="option" placeholder="Java, js..etc"/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-success">Send</button>
        </div>
        </form>
    </div>);
    ReactDOM.render(template,appRoot);
}

renderFormData();
