const user = {
    name:"SAi Kumar",
    getName() {
        return this.name;
    }
}
const getName = user.getName.bind({name:'Adepu'}); 
console.log(getName());

class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision";
        const subTitle ="Put your life in computer hands!";
        const options =["one","two"];
        return (
            <div>
                <div className="form-group">
                    <Header title={title} subTitle ={subTitle}/>
                </div>
                <div className="form-group">
                    <Action />
                </div>
                <div className="form-group">
                    <Options options ={options}/>
                </div>
                <div className="form-group">
                    <AddOptions />
                </div>
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
    handlePick(){
        // const randomNum = Math.floor(Math.random() * user.options.length);
        // const option = user.options[randomNum];
        alert('option');
    }
    render(){
        return (
            <div>
                <button className="btn" onClick={this.handlePick}>What should i do ?</button>
            </div>
        )
    }
}
//Options - component here

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveALL = this.handleRemoveALL.bind(this);
    }
    handleRemoveALL(){
        console.log(this.props.options)
    }
    render(){
        return (
            <div>
                <div className="form-group">
                    <button className="btn btn-danger" onClick={this.handleRemoveALL}>Remove All</button>
                </div>
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
   handleAddOption (e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option);
            // user.options.push(option);
            // e.target.elements.option.value ='';
            // renderApp();
        }
    }
    render(){
        return (
            <form className="form form-inline"  onSubmit={this.handleAddOption}>
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