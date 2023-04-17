const moment = require("moment");
const MarkdownIt = require('markdown-it');
const now = new Date();
const rmj = require('render-markdown-js')

module.exports = function (eleventyConfig) {
    let md = new MarkdownIt();

    eleventyConfig.setTemplateFormats("njk,html,md");
    
    eleventyConfig.addPassthroughCopy('src');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('demos');
    eleventyConfig.addPassthroughCopy('elementos');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('admin');
    eleventyConfig.addPassthroughCopy({ 'netlify': '/' });

    eleventyConfig.addNunjucksFilter("mdIt", function(content) {
        return md.render(content);
    });

    eleventyConfig.addNunjucksFilter("rmj", function(content) {
        return rmj(content);
    });

    eleventyConfig.addNunjucksFilter("limit", function (array, limit) {
        return array.slice(0, limit);
    });

    eleventyConfig.addNunjucksFilter("limitPart", function(array, limit1, limit2) {
        return array.slice(limit1, limit2);
    });

    eleventyConfig.addFilter("dateFormat", function(date, format) {
        return moment(date).format(format);
    });

    eleventyConfig.addCollection('podcastsHighlighted', (collectionApi) => {
        return collectionApi.getFilteredByTag('podcasts').filter((item) => {
            return item.data.highlight == true;
        });
    });

    eleventyConfig.addCollection('tiktoksHighlighted', (collectionApi) => {
        return collectionApi.getFilteredByTag('tiktoks').filter((item) => {
            return item.data.highlight == true;
        });
    });

    eleventyConfig.addCollection('novhigh1', (collectionApi) => {
        return collectionApi.getFilteredByTag('novedades_desinformacion').filter((item) => {
            return item.data.highlight1 == true;
        });
    });

    eleventyConfig.addCollection('novhigh2', (collectionApi) => {
        return collectionApi.getFilteredByTag('novedades_desinformacion').filter((item) => {
            return item.data.highlight2 == true;
        });
    });

    eleventyConfig.addCollection('novhigh3', (collectionApi) => {
        return collectionApi.getFilteredByTag('novedades_desinformacion').filter((item) => {
            return item.data.highlight3 == true;
        });
    });
}
