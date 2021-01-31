import { Component } from "ape-ecs";

export class Position extends Component {
  static properties = {
    x: 0,
    y: 0
  }
}

export class Sprite extends Component {
  static properties = {
    glyph: ''
  }
}
