import Brush from './Brush';
import Matrix from '../../math/Matrix';
// import CanvasTinter from '../../renderers/canvas/utils/CanvasTinter';

/**
 * A Brush that uses a texture for filling or outlining a shape.
 *
 * @class
 * @extends Brush
 * @memberOf PIXI
 */
export default class TextureBrush extends Brush {

    /**
     * @constructor
     * @param {Texture} texture The texture of the brush
     * @param {Matrix} transformMatrix The transformation matrix of the brush
     * @param {bool} repeat Whether the texture should be repeated or not
     * @memberOf PIXI
     */
    constructor(texture, transformMatrix, repeat)
    {
        super(0xFFFFFF, 1);

        /**
         * @member {Texture} texture The texture of the brush
         */
        this.texture = texture;

        /**
         * @member {Matrix} transformMatrix The transformation matrix of the brush
         */
        this.transformMatrix = transformMatrix || Matrix.IDENTITY;

        /**
         * @member {bool} repeat Whether the texture should be repeated or not
         */
        this.repeat = (repeat === undefined) ? true : repeat;

        /**
         * @member {CanvasPattern} the value that can be assigned to a context.fillStyle of StrokeStyle
         * @private
         */
        this._canvasBrush = null;
    }

    // /**
    //  * Generates _canvasBrush based on the tint color
    //  *
    //  * @param {Number} tint the tint color
    //  *
    //  */
    // setTint(tint)
    // {
    //     if (this.texture.baseTexture.hasLoaded)
    //     {
    //         const texture = (tint === 0xFFFFFF)
    //             ? this.texture.baseTexture.source
    //             : CanvasTinter.getTintedTexture({texture: this.texture}, tint);

    //         this._canvasBrush = context.createPattern(texture, this.repeat ? 'repeat' : 'no-repeat');
    //     }
    // }

    /**
     * Sets the brush as a fill style for the given canvas context
     *
     * @param {CanvasRenderingContext2D} context the 2d context used to render
     */
    fillCanvas(context)
    {
        if (this.transformMatrix !== Matrix.IDENTITY)
        {
            context.save();
            context.transform(
                this.transformMatrix.a, this.transformMatrix.b, this.transformMatrix.c,
                this.transformMatrix.d, this.transformMatrix.tx, this.transformMatrix.ty
            );
        }

        context.fillStyle = this._canvasBrush;
        context.fill();

        if (this.transformMatrix !== Matrix.IDENTITY)
        {
            context.restore();
        }
    }

    /**
     * Sets the brush as a stroke style for the given canvas context
     *
     * @param {CanvasRenderingContext2D} context the 2d context used to render
     */
    strokeCanvas(context)
    {
        if (this.transformMatrix !== Matrix.IDENTITY)
        {
            context.save();
            context.transform(
                this.transformMatrix.a, this.transformMatrix.b, this.transformMatrix.c,
                this.transformMatrix.d, this.transformMatrix.tx, this.transformMatrix.ty
            );
        }

        context.strokeStyle = this._canvasBrush;
        context.stroke();

        if (this.transformMatrix !== Matrix.IDENTITY)
        {
            context.restore();
        }
    }
}
