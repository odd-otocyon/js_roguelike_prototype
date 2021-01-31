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

world.registerTags('Cell', 'Floor', 'Display');

const cells = new Array(options['height']).fill(new Array(options['width']).fill(null));

cells.forEach((line, lineIndex) => {
  line.forEach((_, columnIndex) => {
    const entity = world.createEntity({
      tags: ['Cell', 'Floor', 'Display'],
      components: [
        {
          type: 'Position',
          x: 20,
          y: 20
        },
        {
          type: 'Sprite',
          glyph: '.'
        }
      ]
    });
    cells[lineIndex][columnIndex] = entity;
  })
})
