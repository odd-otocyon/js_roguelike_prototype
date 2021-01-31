import { World } from 'ape-ecs';
import { Display } from 'rot-js';

import { Position, Sprite } from './components';

let options = {
	width: 80,
	height: 24
};

const display = new Display(options);
document.body.append(display.getContainer());

const world = new World();
world.registerComponent(Position);
world.registerComponent(Sprite);

world.registerTags('Terrain', 'Floor');

let entity = world.createEntity({
  tags: ['Terrain', 'Floor'],
  components: [
    {
      type: 'Position',
      x: 20,
      y: 20
    }
  ]
});
