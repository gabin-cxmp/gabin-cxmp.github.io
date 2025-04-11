// constants-loader.js (new file)
let constants;
if (window.location.href.toLowerCase().includes('bijorhca')) {
    constants = await import('../../bijorhca/assets/js/constants.js');
} else if (window.location.href.toLowerCase().includes('wsn')) {
    constants = await import('../../wsn/assets/js/constants.js');
} else {
    constants = await import('../../interfiliere/assets/js/constants.js');
}
export const { dom, infoEvent, FORMATS_CUSTOMIZED_BANNERS, LOGOS, FORMATS_BANNERS_WITH_PICTURES } = constants;