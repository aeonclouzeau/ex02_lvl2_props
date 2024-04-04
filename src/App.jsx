import Input from "./Input";
import "./App.css";

function App() {
	return (
		<div className="form-container">
			<h2>Subscribe</h2>
			<p>Sign up with your email addres to receive news and updates</p>
			<form>
				<Input type="text" name="First name" placeholder="First name" />
				<Input type="text" name="Last name" placeholder="Last name" />
				<Input type="email" name="email" placeholder="Email" />
			</form>
			<button type="button">Subscribe</button>
		</div>
	);
}

export default App;
