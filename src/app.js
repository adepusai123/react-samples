class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in computer hands!</h2>
            </div>
        ); 
    }
}
class Action extends React.Component {
    render(){
        return (
            <div>
                <button className="btn">What should i do ?</button>
            </div>
        )
    }
}
//Options - component here
let user = {
    name:"",
    options:[]
}
const onSubmitForm = (e) =>{
    e.preventDefault();
    let option = e.target.elements.option.value;
    if(option){
        user.options.push(option);
        e.target.elements.option.value ='';
        renderApp();
    }
}
class Options extends React.Component {
    render(){
        return (
            <div>
                <p>{user.options.length > 0 ? "Available options!" : "No! , options"}</p>
                <ol>
                    {
                        user.options.map((item) => <li key={item}>{item}</li>)
                    }
                </ol>
            </div>
        );
    }
}

//AddOptions - component here

class AddOptions extends React.Component {
    render(){
        return (
            <form className="form form-inline"  onSubmit={onSubmitForm}>
                <input type="text" name="option" placeholder="type something!" className="form-control"/>
                <button type="submit" className="btn">POST</button>
            </form>
        )
    }
}
const renderApp = () => {
    const jsx = (
        <div>
            <Header />
            <Action />
            <Options />
            <AddOptions />
        </div>
    )
    ReactDOM.render(jsx,document.getElementById('app'));
}
renderApp();