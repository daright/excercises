import * as sanitize from 'sanitize-html';

const sanitizeOptions = {
    allowedTags: [],
    allowedAttributes: {}
};

export const postForm = async data => {
    try {
        const response = await fetch('https://httpbin.org/post', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: sanitize(JSON.stringify(data), sanitizeOptions) // body data type must match "Content-Type" header
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};
