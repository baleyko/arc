import { Module } from '../../';
import HelloWorld from './components/HelloWorld';
import World from './components/World';

export default class App extends Module {
  get declarations() {
    return [HelloWorld, World];
  }
  get bootstrap() {
    return [HelloWorld];
  }
}
