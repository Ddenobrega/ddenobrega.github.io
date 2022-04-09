import { Component } from "react";
import Particles from "react-tsparticles";
import paralax from "../Assets/parallax.json";

export default class ParticleComponent extends Component {
	render() {
		//@ts-ignore
		return <Particles options={paralax} />;
	}
}
