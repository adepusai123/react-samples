let visible = false;
const visibilityToggle = () => {
    visible = !visible;
    render();
}
const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button className="btn" onClick={visibilityToggle}>
            {
                visible ? "Hide Details" : "Show details"
            }
            </button>
            <div>
            {
                visible && (
                    <div>
                        <p>Hello welcome to toggle hide and show</p>
                    </div>
                )
            }
            </div>
        </div>
    )
    ReactDOM.render(jsx,document.getElementById('app'));
}
render();