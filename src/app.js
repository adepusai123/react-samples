class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision";
        const subTitle ="Put your life in computer hands!";
        const options =["one","two"];
        return (
            <div>
                <Header title={title} subTitle ={subTitle}/>
                <Action />
                <Options options ={options}/>
                <AddOptions />
            </div>
        )
    }
}
class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
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
                <p>{this.props.options.length > 0 ? "Available options!" : "No! , options"}</p>
                <ol>
                  {
                      this.props.options.map((option) => <Option key={option} optionText={option}/>)
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
//Option - componet
class Option extends React.Component {
    render(){
        return (
        <li >{this.props.optionText}</li>
        )
    }
}
const renderApp = () => {
    ReactDOM.render(<IndecisionApp />,document.getElementById('app'));
}
renderApp();