/*
 * Shared access to the independent tag database.  The fetch promise is cached
 * so a page reads assets/tags.json only once, even when it renders many images.
 */
window.TagsDatabase = (() => {
    const databasePromises = {};

    function loadDatabase(name) {
        if (!databasePromises[name]) {
            databasePromises[name] = fetch(`assets/${name}.json`).then(response => {
                if (!response.ok) {
                    throw new Error(`Could not load assets/${name}.json`);
                }
                return response.json();
            });
        }

        return databasePromises[name];
    }

    function load() {
        return loadDatabase("tags");
    }

    function imageKey(folder, filename) {
        return `\\${folder}\\${filename}`;
    }

    async function getImageTags(folder, filename) {
        const tags = await load();
        return tags[imageKey(folder, filename)] || {};
    }

    function loadContext() {
        return loadDatabase("context");
    }

    async function getImageContext(folder, filename) {
        const contexts = await loadContext();
        return contexts[imageKey(folder, filename)]?.context || "";
    }

    return { load, imageKey, getImageTags, loadContext, getImageContext };
})();
