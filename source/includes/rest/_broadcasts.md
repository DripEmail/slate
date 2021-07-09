# Single-Email Campaigns (aka Broadcasts)

> Single-Email Campaigns are represented as follows:

```json
{
  "id": "123456",
  "status": "sent",
  "name": "4 Marketing Automation Trends for 2015",
  "from_name": "John Doe",
  "from_email": "john@example.com",
  "postal_address": "123 Anywhere St\nFresno, CA 99999",
  "localize_sending_time": true,
  "send_at": "2015-07-01T10:00:00Z",
  "bcc": null,
  "created_at": "2015-06-21T10:31:58Z",
  "href": "https://api.getdrip.com/v2/9999999/broadcast/123456",
  "subject": "4 Marketing Automation Trends for 2015",
  "html_body": "HTML body",
  "text_body": "Text body",
  "links": {
    "account": "9999999"
  }
}
```

> All responses containing Single-Email Campaign data also include the following top-level link data:

```json
{
  "links": {
    "broadcasts.account": "https://api.getdrip.com/v2/accounts/{broadcasts.account}",
  }
}
```

**Properties**

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td>A read-only Drip generated unique id used to identify each Single-Email Campaign record.</td>
    </tr>
    <tr>
      <td><code>status</code></td>
      <td>Returns whether the Single-Email Campaign is draft, canceled, scheduled, sent or sending.</td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>The private name given to the Single-Email Campaign.</td>
    </tr>
    <tr>
      <td><code>from_name</code></td>
      <td>A "from name" that appears in your sent emails and can be changed on a per email basis. This setting overrides the account's default from name.</td>
    </tr>
    <tr>
      <td><code>from_email</code></td>
      <td>A "from email" that appears in your sent emails and can be changed on a per email basis. This setting overrides the account's default from email.</td>
    </tr>
    <tr>
      <td><code>postal_address</code></td>
      <td>As required by the <a href="http://1.usa.gov/YgrzFP" target="_blank">CAN-SPAM Act</a>, this is a postal address used for all sent emails and can be changed on a per email basis.</td>
    </tr>
    <tr>
      <td><code>localize_sending_time</code></td>
      <td>The scheduled send_at time if set to be sent in the subscriber's time zone.</td>
    </tr>
    <tr>
      <td><code>send_at</code></td>
      <td>The timestamp representing when the Single-Email Campaign will be delivered.</td>
    </tr>
    <tr>
      <td><code>bcc</code></td>
      <td>A list of emails designated to receive a blind copy of the Single-Email Campaign.</td>
    </tr>
    <tr>
      <td><code>created_at</code></td>
      <td>A read-only Drip generated timestamp for when the Single-Email Campaign was first created.</td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td>The url designated for retrieving the account record via the REST API.</td>
    </tr>
    <tr>
      <td><code>subject</code></td>
      <td>The Single-Email Campaign's subject.</td>
    </tr>
    <tr>
      <td><code>html_body</code></td>
      <td>The HTML content used in the email's body.</td>
    </tr>
    <tr>
      <td><code>text_body</code></td>
      <td>The plain text content used in the email's body.</td>
    </tr>
    <tr>
      <td><code>links</code></td>
      <td>An object containing the account's REST API URL.</td>
    </tr>
  </tbody>
</table>

## List all Single-Email Campaigns

> To list Single-Email Campaigns in an account:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/broadcasts" \
  -H "Content-Type: application/json" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

```ruby
require 'drip'

client = Drip::Client.new do |c|
  c.api_key = "YOUR API KEY"
  c.account_id = "YOUR_ACCOUNT_ID"
end

response = client.broadcasts

if response.success?
  puts response.body["broadcasts"]
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')({ token: YOUR_API_KEY, accountId: YOUR_ACCOUNT_ID });
const options = { status: "sent" };

client.listBroadcasts(options)
  .then((response) => {
    // Handle `response.body`
  })
  .catch((error) => {
    // Handle errors
  });
```

> The response looks like this:

```json
# The broadcasts property is an array of broadcast objects.
{
  "links": { ... },
  "meta": {
    "page": 1,
    "sort": "created_at",
    "direction": "asc",
    "count": 5,
    "total_pages": 1,
    "total_count": 5,
    "status": "all"
  },
  "broadcasts": [ ... ]
}
```

### HTTP Endpoint

`GET /v2/:account_id/broadcasts`

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
      <td><code>status</code></td>
      <td>Optional. Filter by one of the following statuses: <code>draft</code>, <code>scheduled</code>, or <code>sent</code>. Defaults to <code>all</code>.</td>
    </tr>
    <tr>
      <td><code>sort</code></td>
      <td>Optional. Sort results by one of these fields: <code>created_at</code>, <code>send_at</code>, or <code>name</code>. Defaults to <code>created_at</code>.</td>
    </tr>
    <tr>
      <td><code>direction</code></td>
      <td>Optional. Filter sort direction with: <code>asc</code> or <code>desc</code>. Defaults to <code>asc</code>.</td>
    </tr>
  </tbody>
</table>

## Fetch a Single-Email Campaign

> To fetch a specific Single-Email Campaign:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/broadcasts/BROADCAST_ID" \
  -H "Content-Type: application/json" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

```ruby
require 'drip'

client = Drip::Client.new do |c|
  c.api_key = "YOUR API KEY"
  c.account_id = "YOUR_ACCOUNT_ID"
end

broadcast_id = 9999999
response = client.broadcast(broadcast_id)

if response.success?
  puts response.body
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')({ token: YOUR_API_KEY, accountId: YOUR_ACCOUNT_ID });
const broadcastId = 9998888;

client.fetchBroadcast(broadcastId)
  .then((response) => {
    // Handle `response.body`
  })
  .catch((error) => {
    // Handle errors
  });
```

> The response looks like this:

```json
# The broadcasts property is an array of one broadcast object.
{
  "links": { ... },
  "broadcasts": [{ ... }]
}
```

### HTTP Endpoint

`GET /v2/:account_id/broadcasts/:broadcast_id`

### Arguments

None.
