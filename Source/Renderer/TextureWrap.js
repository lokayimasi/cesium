/*global define*/
define(['../Core/Enumeration'], function(Enumeration) {
    "use strict";

    /**
     * DOC_TBA
     *
     * @exports TextureWrap
     */
    var TextureWrap = {
        /**
         * DOC_TBA
         *
         * @type {Enumeration}
         * @constant
         * @default 0x812F
         */
        CLAMP_TO_EDGE : new Enumeration(0x812F, 'CLAMP_TO_EDGE'),

        /**
         * DOC_TBA
         *
         * @type {Enumeration}
         * @constant
         * @default 0x2901
         */
        REPEAT : new Enumeration(0x2901, 'REPEAT'),

        /**
         * DOC_TBA
         *
         * @type {Enumeration}
         * @constant
         * @default 0x8370
         */
        MIRRORED_REPEAT : new Enumeration(0x8370, 'MIRRORED_REPEAT'),

        /**
         * DOC_TBA
         *
         * @param {TextureWrap} textureWrap
         *
         * @returns {Boolean}
         */
        validate : function(textureWrap) {
            return ((textureWrap === TextureWrap.CLAMP_TO_EDGE) ||
                    (textureWrap === TextureWrap.REPEAT) ||
                    (textureWrap === TextureWrap.MIRRORED_REPEAT));
        }
    };

    return TextureWrap;
});
