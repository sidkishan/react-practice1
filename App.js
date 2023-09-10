//this is basic react code without using any bundler...focusing on foundation building right now...

const container = React.createElement("div", {}, [
  React.createElement("h1", {}, "React Course foundation building"),
  React.createElement(
    "h2",
    {},
    "React Course handson practice is extremely important!!!!"
  ),
  React.createElement(
    "h3",
    {},
    "Prioritize hands-on practice of react after every lecture"
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
