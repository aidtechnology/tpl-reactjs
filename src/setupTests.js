// Dependencies
import "jsdom-global/register";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";

// Setup
Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

// Create main application wrapper
document.body.innerHTML = '<div id="app"></div>';
