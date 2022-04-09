import "./Styles/App.css";
import { Component } from "react";
import Particles from "./Components/Particles";

export default class App extends Component {
	render() {
		return (
			<div>
				<Particles />
				<div className="box">
					<h1>Welcome</h1>
					<ul>
						<li>
							<a href="https://ddenobrega.github.io/portfolio">
								My Portfolio
							</a>
						</li>
						<li>
							<a href="https://github.com/ddenobrega">
								My Github
							</a>
						</li>
						<li>
							<a href="#">Security Research</a>
						</li>
						<li>
							<a href="https://ddenobrega.github.io/portfolio/#contact">
								Get in touch
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
