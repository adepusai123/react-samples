"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp() {
        _classCallCheck(this, IndecisionApp);

        return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
    }

    _createClass(IndecisionApp, [{
        key: "render",
        value: function render() {
            var title = "Indecision";
            var subTitle = "Put your life in computer hands!";
            var options = ["one", "two"];
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(Action, null),
                React.createElement(Options, { options: options }),
                React.createElement(AddOptions, null)
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subTitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "handlePick",
        value: function handlePick() {
            // const randomNum = Math.floor(Math.random() * user.options.length);
            // const option = user.options[randomNum];
            alert('option');
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { className: "btn", onClick: this.handlePick },
                    "What should i do ?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);
//Options - component here


var user = {
    name: "",
    options: []
    // const onSubmitForm = (e) =>{
    //     e.preventDefault();
    //     let option = e.target.elements.option.value;
    //     if(option){
    //         user.options.push(option);
    //         e.target.elements.option.value ='';
    //         renderApp();
    //     }
    // }
};
var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "handleRemoveALL",
        value: function handleRemoveALL() {
            alert('Remove handler');
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.handleRemoveALL },
                    "Remove All"
                ),
                React.createElement(
                    "p",
                    null,
                    this.props.options.length > 0 ? "Available options!" : "No! , options"
                ),
                React.createElement(
                    "ol",
                    null,
                    this.props.options.map(function (option) {
                        return React.createElement(Option, { key: option, optionText: option });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

//AddOptions - component here

var AddOptions = function (_React$Component5) {
    _inherits(AddOptions, _React$Component5);

    function AddOptions() {
        _classCallCheck(this, AddOptions);

        return _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).apply(this, arguments));
    }

    _createClass(AddOptions, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            if (option) {
                alert(option);
                // user.options.push(option);
                // e.target.elements.option.value ='';
                // renderApp();
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { className: "form form-inline", onSubmit: this.handleAddOption },
                React.createElement("input", { type: "text", name: "option", placeholder: "type something!", className: "form-control" }),
                React.createElement(
                    "button",
                    { type: "submit", className: "btn" },
                    "POST"
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);
//Option - componet


var Option = function (_React$Component6) {
    _inherits(Option, _React$Component6);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                this.props.optionText
            );
        }
    }]);

    return Option;
}(React.Component);

var renderApp = function renderApp() {
    ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
};
renderApp();
