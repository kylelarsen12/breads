const React = require("react");
const Default = require("./layouts/default");

function error404() {
  return (
    <Default>
      <h1>Error 404</h1>
      <img
        src="https://www.akc.org/wp-content/uploads/2019/07/do-dogs-grieve-other-dogs-500x486.jpg"
        alt="404 sad dog"
      />
      <h2>Page not found, go back?</h2>
      <li>
        <a href="/breads">Go home</a>
      </li>
    </Default>
  );
}

module.exports = error404;
