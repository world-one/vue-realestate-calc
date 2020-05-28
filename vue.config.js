module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/scss/utilities/_variables.scss";
                    @import "@/scss/utilities/_mixin.scss";
                `
            }
        }
    },
    pluginOptions: {
      
    }
}
