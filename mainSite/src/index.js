import { render } from 'react-dom';
import App from "./components/App"


render(<App/>,document.getElementById("root"));

const builder={
    title:"built",
    characterType:"different"
}

console.log(builder);