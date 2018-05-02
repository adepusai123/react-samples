class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleVisibileToggle =  this.handleVisibileToggle.bind(this);
        this.state ={
            visible : false
        }
    }
    handleVisibileToggle(){
        this.setState((prevState) => {
            return {
                visible : !prevState.visible
            }
        });
    }
    render(){
        return (
            <div>
            <h1>Visibility Toggle :  {this.state.visible}</h1>
            <button onClick={this.handleVisibileToggle}>{this.state.visible ?  "Hide details" : "Show Details"}</button>
            {this.state.visible && (<div><p>Visibility Toggle Test</p></div>)}
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visible = false;
// const visibilityToggle = () => {
//     visible = !visible;
//     render();
// }
// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button className="btn" onClick={visibilityToggle}>
//             {
//                 visible ? "Hide Details" : "Show details"
//             }
//             </button>
//             <div>
//             {
//                 visible && (
//                     <div>
//                         <p>Hello welcome to toggle hide and show</p>
//                     </div>
//                 )
//             }
//             </div>
//         </div>
//     )
//     ReactDOM.render(jsx,document.getElementById('app'));
// }
// render();