import Brush from './Brush';
import hex2rgb from '../../utils';

/**
 * A Simple single-color brush.
 *
 * @class
 * @extends Brush
 * @memberof PIXI
 */
export default class SolidBrush extends Brush {

    /**
     * @constructor
     * @param {number} color The color of the brush
     * @param {number} alpha The alpha of the brush
     */
    constructor(color, alpha)
    {
        super(color, alpha);

        /**
         * @member {String} the value that can be assigned to a context.fillStyle of StrokeStyle
         * @private
         */
        this._canvasBrush = null;
    }

    /**
    * Generates _canvasBrush based on the tint color
    * @param {number} tint the tint color
    */
    setTint(tint)
    {
        const tintRGB = hex2rgb(tint);
        const r = ((((this.color >> 16) & 0xFF) * tintRGB[0]) + 0.5) | 0;
        const g = ((((this.color >> 8) & 0xFF) * tintRGB[1]) + 0.5) | 0;
        const b = (((this.color & 0xFF) * tintRGB[2]) + 0.5) | 0;

        this._canvasBrush = `rgba(${r}, ${g}, ${b}, ${this.alpha.toFixed(3)})`;
    }

    /**
    * Sets the brush as a fill style for the given canvas context
    * @param {CanvasRenderingContext2D} context the 2d context used to render
    */
    fillCanvas(context)
    {
        context.fillStyle = this._canvasBrush;
        context.fill();
    }

    /**
    * Sets the brush as a stroke style for the given canvas context
    * @param {CanvasRenderingContext2D} context the 2d context used to render
    */
    strokeCanvas(context)
    {
        context.strokeStyle = this._canvasBrush;
        context.stroke();
    }
}
