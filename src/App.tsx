import { ReactNode, Component } from "react";

interface linkProps {
  name?: string;
  link?: string;
}

class Link extends Component<linkProps> {
  render(): ReactNode {
    return (
      <a className="font-bold" href={this.props.link}>
        <div className="bg-[#222] drop-shadow-md hover:animate-pulse cursor-pointer mx-4 lg:mx-12 p-4 rounded-md">
          {this.props.name?.toUpperCase()}
        </div>
      </a>
    );
  }
}

export default class App extends Component {
  render(): ReactNode {
    return (
      <div className="flex flex-1 lg:px-8  flex-col min-h-screen bg-[#161616] text-white font-['JetBrains Mono', monospace]">
        <div className="lg:flex lg:flex-1 lg:flex-row">
          <div className="flex flex-1 flex-col text-center lg:text-left pt-8 ">
            <h1 className="text-5xl font-bold lg:text-7xl ">
              <span className="text-red-500">D</span>aryl{" "}
              <span className="text-red-500">D</span>eNobrega
            </h1>
            <h4>Software Engineer | Security Researcher.</h4>
          </div>
          <div className="flex flex-1 drop-shadow-md lg:gap-2 gap-1 flex-col text-center py-16 justify-center bg-red-400 mx-16 my-28 lg:my-52 lg:mx-36 rounded-lg">
            <Link name="Github" link="https://github.com/ddenobrega" />
            <Link name="Portfolio" link="/porfolio" />
            <Link name="Contact" link="/contact" />
          </div>
        </div>
      </div>
    );
  }
}
