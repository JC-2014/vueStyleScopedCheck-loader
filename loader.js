"use strict";

function styleScopedCheckLoader(content) {
    let style = content.match(/<style[^>]*>/gi)
    if (style) {
        let styleHasOneScoped = style.some(s => {
            return s.indexOf('scoped') > -1
        })        
        if (!styleHasOneScoped) {
            this.emitError(new Error('\u001b[1;31m [vue css error]\u001b[0m: ' + this.resourcePath + ' <style> tag in vue file need scoped!'))
            return
        }
    }
    return content
}

module.exports = styleScopedCheckLoader;
