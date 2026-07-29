/*
 * Shared access to the independent tag database.  The fetch promise is cached
 * so a page reads assets/tags.json only once, even when it renders many images.
 */
window.TagsDatabase = (() => {
    let tagsPromise;
    let contextPromise;

    function load() {
        if (!tagsPromise) {
            tagsPromise = fetch("assets/tags.json").then(response => {
                if (!response.ok) {
                    throw new Error("Could not load assets/tags.json");
                }
                return response.json();
            });
        }

        return tagsPromise;
    }

    function imageKey(folder, filename) {
        return `\\${folder}\\${filename}`;
    }

    async function getImageTags(folder, filename) {
        const tags = await load();
        return tags[imageKey(folder, filename)] || {};
    }

    function loadContext() {
        if (!contextPromise) {
            contextPromise = fetch("assets/context.json").then(response => {
                if (!response.ok) {
                    throw new Error("Could not load assets/context.json");
                }
                return response.json();
            });
        }

        return contextPromise;
    }

    async function getImageContext(folder, filename) {
        const contexts = await loadContext();
        return contexts[imageKey(folder, filename)]?.context || "";
    }

    return { load, imageKey, getImageTags, loadContext, getImageContext };
})();
