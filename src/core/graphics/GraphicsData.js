/**
 * A GraphicsData object.
 *
 * @class
 * @memberof PIXI
 */
export default class GraphicsData
{
    /**
     *
     * @param {number} lineWidth - the width of the line to draw
     * @param {Brush} strokeStyle the brush used for drawing the border of the shape
     * @param {Brush} fillStyle the brush used for filling the shape
     * @param {boolean} fill - whether or not the shape is filled with a colour
     * @param {PIXI.Circle|PIXI.Rectangle|PIXI.Ellipse|PIXI.Polygon} shape - The shape object to draw.
     */
    constructor(lineWidth, strokeStyle, fillStyle, fill, shape)
    {
        /**
         * @member {number} the width of the line to draw
         */
        this.lineWidth = lineWidth;

        /**
         * @member {Brush} the style of the line to draw
         */
        this.strokeStyle = strokeStyle;

        /**
         * @member {Brush} the style of the fill
         */
        this.fillStyle = fillStyle;

        /**
         * @member {boolean} whether or not the shape is filled with a colour
         */
        this.fill = fill;

        this.holes = [];

        /**
         * @member {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} The shape object to draw.
         */
        this.shape = shape;

        /**
         * @member {number} The type of the shape, see the Const.Shapes file for all the existing types,
         */
        this.type = shape.type;
    }

    /**
     * Creates a new GraphicsData object with the same values as this one.
     *
     * @return {PIXI.GraphicsData} Cloned GraphicsData object
     */
    clone()
    {
        return new GraphicsData(
            this.lineWidth,
            this.strokeStyle,
            this.fillStyle,
            this.fill,
            this.shape
        );
    }

    /**
     * Adds a hole to the shape.
     *
     * @param {PIXI.Rectangle|PIXI.Circle} shape - The shape of the hole.
     */
    addHole(shape)
    {
        this.holes.push(shape);
    }

    /**
     * Destroys the Graphics data.
     */
    destroy()
    {
        this.shape = null;
        this.holes = null;
    }
}
