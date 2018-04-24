"use strict";

console.log('REACT App  is running ! :)');
//JSX  - JavaScript XML
var obj = {
    userName: "Sai Kumar",
    age: 18,
    location: "Hyderbad",
    options: []
};
var getLocation = function getLocation(location) {
    if (location) {
        React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
};
var onSubmitForm = function onSubmitForm(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        obj.options.push(option);
        e.target.elements.option.value = ''; //clear the input value
        renderFormData();
    }
};
var resetOptions = function resetOptions() {
    obj.options = [];
    renderFormData();
};
var makeDecision = function makeDecision() {
    var randomNum = Math.floor(Math.random() * obj.options.length);
    var option = obj.options[randomNum];
    alert(option);
};
var appRoot = document.getElementById('app');

var renderFormData = function renderFormData() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Indecision App!"
        ),
        React.createElement(
            "p",
            null,
            obj.userName ? obj.userName : 'Annonymus'
        ),
        React.createElement(
            "p",
            null,
            obj.options.length > 0 ? 'Here are options for you.' : "No ! options available"
        ),
        React.createElement(
            "button",
            { disabled: obj.options.length === 0, onClick: makeDecision, className: "btn btn-primary" },
            "What should i do ?"
        ),
        React.createElement(
            "button",
            { onClick: resetOptions, className: "btn btn-danger" },
            "Clear"
        ),
        React.createElement(
            "ol",
            null,
            obj.options.map(function (ele) {
                return React.createElement(
                    "li",
                    { key: ele },
                    ele
                );
            })
        ),
        React.createElement(
            "form",
            { className: "form-inline", onSubmit: onSubmitForm },
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("input", { type: "text", className: "form-control", name: "option", placeholder: "Java, js..etc" })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "button",
                    { type: "submit", className: "btn btn-success" },
                    "Send"
                )
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderFormData();
