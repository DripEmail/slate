# API Requirements

## Endpoint

- Responds to an HTTP GET request
- No additional authentication supported beyond the path and query params, e.g. you can set your base URL to something similar to one of:
    - `https://api.example.com/?token=a7c43be`
    - `https://api.example.com/a7c43be/`

## Parameters

- Parameters are scoped to an entity, e.g. `subscriber` or `event`
- You'll specify which fields of these objects you want sent to your endpoint
    - Let us know the _exact_ Custom Field names and Event property names you want us to pass to you via the query string
    - This limitation (not sending all of them) exists because most HTTP servers enforce a URI length limit, and we're passing these fields to you via GET in order for them to be highly cacheable, as to optimize for delivery throughput
- Scoped parameters are then named the same as the custom field
    - e.g. A subscriber custom field of `first_name` would be passed through as `subscriber[first_name]`
    - e.g. An event field of `product_id` would be passed through as `event[product_id]`
- The `event` object is valid only within a Workflow
- Parameters will all be passed via the URL query string (we only support `GET` requests)
- There can be default parameters embedded in your endpoint URL
    - We will append our parameters to yours
    - This is useful for authentication, such as providing `?key=12345`
- Parameters without a value will be sent through as a key with no value
    - e.g. A subscriber with a custom field assigned for country, but not for zip would have a URL query string of `?subscriber[country]=US&subscriber[zip]`
- A parameter value should not be unique per subscriber (e.g. we won't send `email`); this allows for greater cacheability of responses, as to optimize your delivery throughput

<h2 id="cdc-requirements-response">Response</h2>

- Responses must have a `Content-Type` header of `application/json`
- A response with a `2xx` status will be considered successful
    - A successful response should contain a body that is a parseable JSON _document_ (i.e. the top level must be either an object or an array)
    - The returned document must not exceed 350 KB in size
- A `3xx` response will be followed as redirects per the HTTP specification
- A client error response (those in the `4xx` range) will be considered a permanent error
    - Except `429`; this signals to Drip that the request should be tried again later
- A server error response (those in the `5xx` range) will be considered a temporary error
- No other response codes are supported

When a `2xx` response is received, Drip will use whatever data is given, and will assume `null` values for any data not given. For example, response of `{}` would still be accessible in Liquid and would respond to any attribute with `nil`.

## General

- We will retry temporary error responses for a limited amount of time
    - If retries continue to fail, we will give up sending the individual email
- A permanent error response will cause the the email to not be sent
- In order to optimize your sending throughput, we will time out any response or series of redirects after 3 seconds
    - If you need additional time to process Drip's request (e.g. to warm a cache), you can respond with a `429`, at
      which point we will retry the request with exponential backoff
