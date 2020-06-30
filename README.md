## On Track Tech Test
In the root directory, run `yarn start` to start the server. Then visit `http://localhost:3000/` to see the app in action.

### Dependencies
react-bootstrap: I used this as suggested to speed up development by using ready-made components.

react-router-dom: I used this to ensure that pagination was reflected in the URL.

### Issues
When using the API, the endpoint returned the same result, even when changing the value of the parameters supplied. Because of this, even with pagination and search terms applied, the result comes back the same each time and it looks like the result is unchanged. On a code level however, the result is refreshed each time the page number is changed, or new filters are applied.

This also made me wonder if I was meant to paginate the returned object, rather than the query - i.e. was pagination intended to change the page parameter of the API query, or was it intended to help the user page through the only set of results the API returned. I was not sure, so I used pagination to alter the API query, as I was able to return all the API results on one page.



