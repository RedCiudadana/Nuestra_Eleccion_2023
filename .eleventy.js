module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats("njk");
    
    eleventyConfig.addPassthroughCopy('src');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('demos');
    eleventyConfig.addPassthroughCopy('elementos');
    eleventyConfig.addPassthroughCopy('images');

}