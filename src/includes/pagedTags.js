// from: https://github.com/solution-loisir/eleventy-deep-pagination
// オリジナルはバグがあるので修正して使っている

const lodashChunk = require('lodash.chunk');

module.exports = function(collection, { collectionAPI, size = 4 }) {
    let tagSet = new Set();

    collectionAPI.forEach(templateObjet => {
        if('tags' in templateObjet.data) {
            const tagsProperty = templateObjet.data.tags;
            if(Array.isArray(tagsProperty)) {
                tagsProperty.forEach(tag => tagSet.add(tag));
            } else if(typeof tagsProperty === 'string') {
                tagSet.add(tagsProperty);
            }
        }
    });
    tagSet.delete('posts');

    const pagedTags = [];



    [...tagSet].forEach(tag => {
        const tagCollection = [...collection.getFilteredByTag(tag)].reverse();
        const pagedCollection = lodashChunk(tagCollection, size);

        const tagPath = (tag, index) => {
            if(index < 0 || index >= pagedCollection.length) return undefined;
            return `/tags/${tag}/${index ? (index + 1) + '/' : ''}`
        }

        pagedCollection.forEach((templateObjectsArray, index) => {
            pagedTags.push({
                tagName: tag,
                path: tagPath(tag, index),
                pageNumber: index,
                pageSize: pagedCollection.length,
                previous: tagPath(tag, index - 1),
                next: tagPath(tag, index + 1),
                templateObjets: templateObjectsArray
            });
        });
    });

    return pagedTags;
}