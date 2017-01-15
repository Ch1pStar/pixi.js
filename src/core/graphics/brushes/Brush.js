/**
 * The base class for brush subclasses, which defines how a shape should be filled or stroked
 *
 * @class
 * @memberof PIXI
 */
export default class Brush {
    /**
     * @constructor
     * @param {number} color The color of the brush
     * @param {number} alpha The alpha of the brush
     */
    constructor(color, alpha)
    {
        this.color = color;

        this.alpha = (alpha === undefined) ? 1 : alpha;
    }
}
