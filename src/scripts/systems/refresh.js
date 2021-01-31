import { System } from "ape-ecs";

export default class Refresh extends System {
  init(display) {
    this.display = display;
    this.displayableQuery = this.createQuery().fromAll('Displayable');
  }

  update(tick) {
    const entities = this.displayableQuery.execute();
    for (const entity of entities) {
      const position = entity.getOne('Position');
      const glyph = entity.getOne('Sprite').glyph;
      this.display.drawText(position.x, position.y, glyph);
    }
  }
}