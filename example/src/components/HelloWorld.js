import { Component } from '../../../';

export default new class HelloWorld extends Component {
  get template() {
    return 'Hello <world></world>!';
  }
};
