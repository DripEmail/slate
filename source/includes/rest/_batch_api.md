# Batch API

## Create or update a batch of subscribers

> To create or update a batch of subscribers:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/subscribers/batches" \
  -H 'Content-Type: applicaton/json' \
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

```ruby
require 'drip'

client = Drip::Client.new do |c|
  c.api_key = "YOUR API KEY"
  c.account_id = "YOUR_ACCOUNT_ID"
end

# An array of subscribers
subscribers = [
  {
    "email": "john@acme.com"
  },
  {
    "email": "jane@acme.com"
  }
  # ...
]

response = client.create_or_update_subscribers(subscribers)

if response.success?
  # ...
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')({ token: YOUR_API_KEY, accountId: YOUR_ACCOUNT_ID });
const batch = {
  "batches": [{
    "subscribers": [
      {
        "email": "john@acme.com",
        "tags": "Dog Person"
      },
      {
        "email": "jane@acme.com",
        "tags": "Cat Person"
      }
      // Lots more subscribers...
    ]
  }]
};

client.updateBatchSubscribers(batch, (errors, responses, bodies) => {
  // Do stuff
  }
);
```

> Responds with a `201 Created` response and an empty JSON response if successful:

```json
{}
```

We recommend using this API endpoint when you need to create or update a collection of subscribers at once.

Note: Since our batch APIs process requests in the background, there may be a delay between the time you submit your
request and the time your data appears in the user interface.

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
  -H 'Content-Type: applicaton/json' \
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
          "email": "jane@acme.com"
        }
      ]
    }]
  }
  EOF
```

```ruby
require 'drip'

client = Drip::Client.new do |c|
  c.api_key = "YOUR API KEY"
  c.account_id = "YOUR_ACCOUNT_ID"
end

# An array of subscribers
subscribers = [
  {
    "email": "john@acme.com"
  },
  {
    "email": "jane@acme.com"
  }
  # ...
]

response = client.unsubscribe_subscribers(subscribers)

if response.success?
  # ...
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')({ token: YOUR_API_KEY, accountId: YOUR_ACCOUNT_ID });
const payload = {
  batches:
  [
    {
      subscribers: [
        {
          email: 'someone@example.com'
        }
      ]
    }
  ]
};

client.unsubscribeBatchSubscribers(payload)
  .then((response) => {
    // Handle `response.body`
  })
  .catch((error) => {
    // Handle errors
  });
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

> To record a batch of events:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/subscribers/batches" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -H 'Content-Type: applicaton/json' \
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

```ruby
require 'drip'

client = Drip::Client.new do |c|
  c.api_key = "YOUR API KEY"
  c.account_id = "YOUR_ACCOUNT_ID"
end

# An array of events
events = [
  {
    "email": "john@acme.com",
    "action": "Opened a door"
  },
  {
    "email": "joe@acme.com",
    "action": "Closed a door"
  }
  # ...
]

response = client.track_events(events)
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')({ token: YOUR_API_KEY, accountId: YOUR_ACCOUNT_ID });
const payload = {
  batches: [{
    events: [
      {
        email: "john@acme.com",
        action: "Opened a door"
      },
      {
        email: "joe@acme.com",
        action: "Closed a door"
      }
    ]
  }]
};

client.recordBatchEvents(payload)
  .then((response) => {
    // Handle `response.body`
  })
  .catch((error) => {
    // Handle errors
  });
```

> Responds with a `201 Created` response and an empty JSON response if successful:

```json
{}
```

We recommend using this API endpoint when you need to record a collection of events at once that will likely exceed the regular rate limit of 3,600 requests per hour.

Note: Since our batch APIs process requests in the background, there may be a delay between the time you submit your
request and the time your data appears in the user interface.

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

## Create or update a batch of orders

> To create or update a batch of orders:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/orders/batches" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -H 'Content-Type: applicaton/json' \
  -u YOUR_API_KEY: \
  -d @- << EOF
  {
    "batches": [{
      "orders": [
        {
          "email": "john@acme.com",
          "provider": "shopify",
          "upstream_id": "abcdef",
          "identifier": "Order_123456",
          "amount": 4900,
          "tax": 100,
          "fees": 0,
          "discount": 0,
          "permalink": "http://myorders.com/orders/123456",
          "currency_code": "USD",
          "properties": {
            "size": "medium",
            "color": "red"
          },
          "occurred_at": "2013-06-21T10:31:58Z",
          "closed_at": "2013-06-21T10:35:58Z",
          "cancelled_at": null,
          "financial_state": "paid",
          "fulfillment_state": "fulfilled",
          "billing_address": {
            "name": "Bill Billington",
            "first_name": "Bill",
            "last_name": "Billington",
            "company": "Bills R US",
            "address_1": "123 Bill St.",
            "address_2": "Apt. B",
            "city": "Billtown",
            "state": "CA",
            "zip": "01234",
            "country": "United States",
            "phone": "555-555-5555",
            "email": "bill@bills.com"
          },
          "shipping_address": {
            "name": "Ship Shippington",
            "first_name": "Ship",
            "last_name": "Shipington",
            "company": "Shipping 4 Less",
            "address_1": "123 Ship St.",
            "address_2": "null",
            "city": "Shipville",
            "state": "CA",
            "zip": "01234",
            "country": "United States",
            "phone": "555-555-5555",
            "email": "ship@shipping.com"
          },
          "items": [{
            "id": "8888888",
            "product_id": "765432",
            "sku": "4444",
            "amount": 4900,
            "name": "Canoe",
            "quantity": 1,
            "upstream_id": "hijkl",
            "upstream_product_id": "opqrs",
            "upstream_product_variant_id": "zyxwv",
            "price": 4900,
            "tax": 100,
            "fees": 0,
            "discount": 100,
            "taxable": true,
            "properties": {
              "color": "black"
            }
          }]
        },
        {
          "email": "joe@acme.com",
          "provider": "shopify",
          "upstream_id": "fedcba",
          "identifier": "Order_654321",
          "amount": 4900,
          "tax": 100,
          "fees": 0,
          "discount": 0,
          "permalink": "http://myorders.com/orders/654321",
          "currency_code": "USD",
          "properties": {
            "size": "small",
            "color": "blue"
          },
          "occurred_at": "2013-05-18T10:31:58Z",
          "closed_at": "2013-05-18T10:35:58Z",
          "cancelled_at": null,
          "financial_state": "paid",
          "fulfillment_state": "fulfilled",
          "billing_address": {
            "name": "Bill Billington",
            "first_name": "Bill",
            "last_name": "Billington",
            "company": "Bills R US",
            "address_1": "123 Bill St.",
            "address_2": "Apt. B",
            "city": "Billtown",
            "state": "CA",
            "zip": "01234",
            "country": "United States",
            "phone": "555-555-5555",
            "email": "bill@bills.com"
          },
          "shipping_address": {
            "name": "Ship Shippington",
            "first_name": "Ship",
            "last_name": "Shipington",
            "company": "Shipping 4 Less",
            "address_1": "123 Ship St.",
            "address_2": "null",
            "city": "Shipville",
            "state": "CA",
            "zip": "01234",
            "country": "United States",
            "phone": "555-555-5555",
            "email": "ship@shipping.com"
          },
          "items": [{
            "id": "8888888",
            "product_id": "765432",
            "sku": "4444",
            "amount": 4900,
            "name": "Canoe",
            "quantity": 1,
            "upstream_id": "hijkl",
            "upstream_product_id": "opqrs",
            "upstream_product_variant_id": "zyxwv",
            "price": 4900,
            "tax": 100,
            "fees": 0,
            "discount": 100,
            "taxable": true,
            "properties": {
              "color": "black"
            }
          }]
        }
      ]
    }]
  }
  EOF
```

> Responds with a `202 Accepted` response and an empty JSON response:

```json
{}
```

We recommend using this API endpoint when you need to create a collection of orders and subscribers at once that will likely exceed the regular rate limit of 3,600 requests per hour.

Note: Since our batch APIs process requests in the background, there may be a delay between the time you submit your
request and the time your data appears in the user interface.

### HTTP Endpoint

`POST /:account_id/orders/batches`

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
      <td><code>orders</code></td>
      <td>Required. An Array with between 1 and 1000 objects containing <a href="#orders">order data</a>.</td>
    </tr>
  </tbody>
</table>
