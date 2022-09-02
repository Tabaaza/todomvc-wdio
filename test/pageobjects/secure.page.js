const Page = require('./page');


class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

module.exports = new SecurePage();
