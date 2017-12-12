# Batch API

## Create or update a batch of subscribers

> To create or update a batch of subscribers:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/subscribers/batches" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY: \
  -d @- << EOF
  {
    "batches": [{
      "subscribers": [
        {
          "email": "john@acme.com",
          "time_zone": "America/Los_Angeles",
          "tags": ["Customer", "SEO"],
          "custom_fields": {
            "name": "John Doe"
          }
        },
        {
          "email": "joe@acme.com",
          "time_zone": "America/Los_Angeles",
          "tags": ["Prospect"],
          "custom_fields": {
            "name": "Joe"
          }
        }
      ]
    }]
  }
  EOF
```

> Responds with a `201 Created` response and an empty JSON response if successful:

```json
{}
```

We recommend using this API endpoint when you need to create or update a collection of subscribers at once.

Note: Since our batch APIs process requests in the background, there may be a delay between the time you submit your
request and the time your data appears in user interface.

### HTTP Endpoint

`POST /:account_id/subscribers/batches`

### Arguments

<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>subscribers</code></td>
      <td>Required. An Array with between 1 and 1000 objects containing subscriber data.</td>
    </tr>
  </tbody>
</table>

## Unsubscribe a batch of subscribers

> To globally unsubscribe a batch of subscribers:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/unsubscribes/batches" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY: \
  -d @- << EOF
  {
    "batches": [{
      "subscribers": [
        {
          "email": "john@acme.com"
        },
        {
          "email": "joe@acme.com"
        }
      ]
    }]
  }
  EOF
```

> Responds with a `204 No Content` response if successful.

### HTTP Endpoint

`POST /:account_id/unsubscribes/batches`

### Arguments

<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>subscribers</code></td>
      <td>Required. An Array with between 1 and 1000 objects containing subscriber data.</td>
    </tr>
  </tbody>
</table>

## Record a batch of events

> To create or update a batch of subscribers:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/subscribers/batches" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY: \
  -d @- << EOF
  {
    "batches": [{
      "events": [
        {
          "email": "john@acme.com",
          "action": "Opened a door"
        },
        {
          "email": "joe@acme.com",
          "action": "Closed a door"
        }
      ]
    }]
  }
  EOF
```

> Responds with a `201 Created` response and an empty JSON response if successful:

```json
{}
```

We recommend using this API endpoint when you need to record a collection of events at once that will likely exceed the regular rate limit of 3,600 requests per hour.

Note: Since our batch APIs process requests in the background, there may be a delay between the time you submit your
request and the time your data appears in user interface.

### HTTP Endpoint

`POST /:account_id/events/batches`

### Arguments

<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>events</code></td>
      <td>Required. An Array with between 1 and 1000 objects containing event data.</td>
    </tr>
  </tbody>
</table>