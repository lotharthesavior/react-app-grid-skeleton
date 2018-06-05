/**
 * Local Storage Helper
 *
 */

class StorageHelper {

    /**
     * Get item for this component at localstorage
     *
     * @returns {*}
     */
    getFromLocalStorage (key) {
        let ls = {};
        if (global.localStorage) {
            try {
                ls = JSON.parse(global.localStorage.getItem(key)) || {};
            } catch (e) {
                /*Ignore*/
            }
        }
        return ls.value;
    }

    /**
     * Set item for this component at localstorage
     *
     * @param value
     */
    saveToLocalStorage (key, value) {
        if (global.localStorage) {
            global.localStorage.setItem(
                key,
                JSON.stringify({
                    value: value
                })
            );
        }
    }

}

export default new StorageHelper();