import { World } from 'ape-ecs';
import { Display } from 'rot-js';

import { Position, Sprite } from './components';
import Refresh from './systems/refresh';

let options = {
	width: 80,
	height: 24
};

const display = new Display(options);
document.body.append(display.getContainer());

const world = new World();
world.registerComponent(Position);
world.registerComponent(Sprite);

world.registerTags('Cell', 'Floor', 'Displayable');

world.registerSystem('display', Refresh, [display]);

const cells = new Array(options['height']).fill(new Array(options['width']).fill(null));

cells.forEach((line, lineIndex) => {
  line.forEach((_, columnIndex) => {
    const entity = world.createEntity({
      tags: ['Cell', 'Floor', 'Displayable'],
      components: [
        {
          type: 'Position',
          x: columnIndex,
          y: lineIndex
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

world.runSystems('display');