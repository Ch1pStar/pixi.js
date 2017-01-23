import Shader from '../../../Shader';

/**
 * This shader is used to draw textured shapes for {@link PIXI.Graphics}.
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.Shader
 */
export default class TextureShader extends Shader
{
    /**
     * @param {WebGLRenderingContext} gl - The webgl shader manager this shader works for.
     */
    constructor(gl)
    {
        super(gl,
            // vertex shader
            [
                'attribute vec2 aVertexPosition;',
                'attribute vec4 aColor;',
                'attribute vec2 aTextureCoord;',

                'uniform mat3 translationMatrix;',
                'uniform mat3 projectionMatrix;',

                'uniform float alpha;',
                'uniform vec3 tint;',

                'varying vec4 vColor;',
                'varying vec2 vTextureCoord;',

                'void main(void){',
                '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
                '   vColor = aColor * vec4(tint * alpha, alpha);',
                '   vTextureCoord = aTextureCoord;',
                '}',
            ].join('\n'),
            // fragment shader
            [
                'varying vec4 vColor;',
                'varying vec2 vTextureCoord;',

                'uniform sampler2D uSampler;',

                'void main(void){',
                '   vec4 color = texture2D(uSampler, vec2(.5, 1));',
                '   gl_FragColor = color;',
                '}',
            ].join('\n')
        );
    }
}
