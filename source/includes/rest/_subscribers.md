# Subscribers

> Subscribers are represented as follows:

```json
{
  "id": "z1togz2hcjrkpp5treip",
  "status": "active",
  "email": "john@acme.com",
  "eu_consent": "granted",
  "time_zone": "America/Los_Angeles",
  "utc_offset": -440,
  "visitor_uuid": "sa8f7sdf78sdsdahf788d7asf8sd",
  "custom_fields": {
    "name": "John Doe"
  },
  "tags": ["Customer", "SEO"],
  "ip_address": "111.111.111.11",
  "user_agent": "Chrome/36.0.1985.143",
  "original_referrer": "http://www.getdrip.com",
  "landing_url": "https://www.getdrip.com/docs/rest-api",
  "prospect": true,
  "lead_score": 72,
  "lifetime_value": 10000,
  "created_at": "2013-06-21T10:31:58Z",
  "href": "https://api.getdrip.com/v2/9999999/subscribers/12345",
  "user_id": "12345",
  "base_lead_score": 30,
  "links": {
    "account": "9999999"
  }
}
```

> All responses containing subscriber data also include the following top-level link data:

```json
{
  "links": {
    "subscribers.account": "https://api.getdrip.com/v2/accounts/{subscribers.account}"
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
      <td>A read-only Drip generated unique id used to identify each subscriber record.</td>
    </tr>
    <tr>
      <td><code>status</code></td>
      <td>The subscriber's status whether <code>active</code> or <code>unsubscribed</code>.</td>
    </tr>
    <tr>
      <td><code>email</code></td>
      <td>The subscriber's email address.</td>
    </tr>
    <tr>
      <td><code>eu_consent</code></td>
      <td>A string describing whether the subscriber GDPR consent is <code>granted</code>, <code>denied</code>, or <code>unknown</code>.</td>
    </tr>
    <tr>
      <td><code>time_zone</code></td>
      <td>The subscriber's time zone (in Olson format).</td>
    </tr>
    <tr>
      <td><code>utc_offset</code></td>
      <td>The UTC offset in minutes relative to UTC/GMT.</td>
    </tr>
    <tr>
      <td><code>visitor_uuid</code></td>
      <td>A read-only Drip generated unique id used to identify each subscriber's visitor record if available.</td>
    </tr>
    <tr>
      <td><code>custom_fields</code></td>
      <td>An Object containing custom field data. E.g. <code>{ "name": "John Doe" }</code>.</td>
    </tr>
    <tr>
      <td><code>tags</code></td>
      <td>An Array containing one or more tags. E.g. <code>["Customer", "SEO"]</code>.</td>
    </tr>
    <tr>
      <td><code>ip_address</code></td>
      <td>The subscriber's IP address if available.</td>
    </tr>
    <tr>
      <td><code>user_agent</code></td>
      <td>The subscriber's browser User Agent if available.</td>
    </tr>
    <tr>
      <td><code>original_referrer</code></td>
      <td>The initial referral URL when the subscriber first visited your site if available.</td>
    </tr>
    <tr>
      <td><code>landing_url</code></td>
      <td>The first page visited by the subscriber if available.</td>
    </tr>
    <tr>
      <td><code>prospect</code></td>
      <td>Returns true if the subscriber is marked as a lead.</td>
    </tr>
    <tr>
      <td><code>lead_score</code></td>
      <td>The subscriber's lead score.</td>
    </tr>
    <tr>
      <td><code>lifetime_value</code></td>
      <td>The subscriber's lifetime value in cents.</td>
    </tr>
    <tr>
      <td><code>created_at</code></td>
      <td>A timestamp representing when the subscriber record was first created.</td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td>The url designated for retrieving the subscriber record via the REST API.</td>
    </tr>
    <tr>
      <td><code>user_id</code></td>
      <td>A unique identifier for the user in your database, such as a primary key.</td>
    </tr>
    <tr>
      <td><code>base_lead_score</code></td>
      <td>An Integer specifying the starting value for lead score calculation for this subscriber. Defaults to <code>30</code>.</td>
    </tr>
    <tr>
      <td><code>links</code></td>
      <td>An object containing the REST API URL for the account.</td>
    </tr>
  </tbody>
</table>


## Create or update a subscriber

> To create or update a subscriber:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/subscribers" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -H 'Content-Type: applicaton/json' \
  -u YOUR_API_KEY: \
  -d @- << EOF
  {
    "subscribers": [{
      "email": "john@acme.com",
      "time_zone": "America/Los_Angeles",
      "custom_fields": {
        "name": "John Doe"
      }
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

subscriber_email = "john@acme.com"
options = {
  time_zone: "America/Los_Angeles",
  custom_fields: {
    name: "John Doe"
  }
}

response = client.create_or_update_subscriber(subscriber_email, options)

if response.success?
  puts response.body["subscribers"]
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')({ token: YOUR_API_KEY, accountId: YOUR_ACCOUNT_ID });
const payload = {
  subscribers: [{
    email: "john@acme.com",
    time_zone: "America/Los_Angeles",
    custom_fields: {
      name: "John Doe"
    }
  }]
};

client.createUpdateSubscriber(payload)
  .then((response) => {
    // Handle `response.body`
  })
  .catch((error) => {
    // Handle errors
  });
```

> The response looks like this:

```json
# The subscribers property is an array of one object.
{
  "links": { ... },
  "subscribers": [{ ... }]
}
```

### HTTP Endpoint

`POST /:account_id/subscribers`

If you need to create or update a collection of subscribers at once, use our [batch API](/) instead.

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
      <td><code>email</code></td>
      <td>Optional. The subscriber's email address. Either <code>email</code> or <code>id</code> must be included.</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>Optional. The subscriber's Drip <code>id</code>. Either <code>email</code> or <code>id</code> must be included.</td>
    </tr>
    <tr>
      <td><code>new_email</code></td>
      <td>Optional. A new email address for the subscriber. If provided and a subscriber with the <code>email</code> above does not exist, this address will be used to create a new subscriber.</td>
    </tr>
    <tr>
      <td><code>user_id</code></td>
      <td>Optional. A unique identifier for the user in your database, such as a primary key.</td>
    </tr>
    <tr>
      <td><code>time_zone</code></td>
      <td>Optional. The subscriber's time zone (in Olson format). Defaults to <code>Etc/UTC</code></td>
    </tr>
    <tr>
      <td><code>lifetime_value</code></td>
      <td>Optional. The lifetime value of the subscriber (in cents).</td>
    </tr>
    <tr>
      <td><code>ip_address</code></td>
      <td>Optional. The subscriber's ip address E.g. <code>"111.111.111.11"</code></td>
    </tr>
    <tr>
      <td><code>custom_fields</code></td>
      <td>Optional. An Object containing custom field data. E.g. <code>{ "name": "John Doe" }</code>.</td>
    </tr>
    <tr>
      <td><code>tags</code></td>
      <td>Optional. An Array containing one or more tags. E.g. <code>["Customer", "SEO"]</code>.</td>
    </tr>
    <tr>
      <td><code>remove_tags</code></td>
      <td>Optional. An Array containing one or more tags to be removed from the subscriber. E.g. <code>["Customer", "SEO"]</code>.</td>
    </tr>
    <tr>
      <td><code>prospect</code></td>
      <td>Optional. A Boolean specifiying whether we should attach a lead score to the subscriber (when lead scoring is enabled). Defaults to <code>true</code>.
        <strong>Note:</strong> This flag used to be called <code>potential_lead</code>, which we will continue to accept for backwards compatibility.</td>
    </tr>
    <tr>
      <td><code>base_lead_score</code></td>
      <td>Optional. An Integer specifying the starting value for lead score calculation for this subscriber. Defaults to <code>30</code>.</td>
    </tr>
    <tr>
      <td><code>eu_consent</code></td>
      <td>Optional. A String specifying whether the subscriber <code>granted</code> or <code>denied</code> GDPR consent.</td>
    </tr>
    <tr>
      <td><code>eu_consent_message</code></td>
      <td>Optional. A String containing the message the subscriber granted or denied their consent to.</td>
    </tr>
  </tbody>
</table>


## List all subscribers

> To list subscribers:

```shell
curl "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/subscribers" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

```ruby
require 'drip'

client = Drip::Client.new do |c|
  c.api_key = "YOUR API KEY"
  c.account_id = "YOUR_ACCOUNT_ID"
end

response = client.subscribers

if response.success?
  puts response.body["subscribers"]
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')({ token: YOUR_API_KEY, accountId: YOUR_ACCOUNT_ID });
const options = { status: "active", subscribed_before: "2017-01-01T00:00:00Z" };

client.listSubscribers(options)
  .then((response) => {
    // Handle `response.body`
  })
  .catch((error) => {
    // Handle errors
  });
```

> The response looks like this:

```json
# The subscribers property is an array subscriber objects.
# The meta property contains pagination information.
{
  "links": { ... },
  "meta": {
    "page": 1,
    "count": 5,
    "total_pages": 1,
    "total_count": 5
  },
  "subscribers": [{ ... }]
}
```

### HTTP Endpoint

`GET /:account_id/subscribers`

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
      <td>Optional. Filter by one of the following statuses: <code>all</code>, <code>active</code>, <code>unsubscribed</code>, <code>active_or_unsubscribed</code> or <code>undeliverable</code>. Defaults to <code>active</code>.</td>
    </tr>

    <tr>
      <td><code>tags</code></td>
      <td>Optional. A comma separated list of tags. When included, returns only subscribers who have at least one of the listed tags.</td>
    </tr>

    <tr>
      <td><code>subscribed_before</code></td>
      <td>Optional. A <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a> datetime. When included, returns only subscribers who were created before the date. Eg. <code>"2017-01-01T00:00:00Z"</code></td>
    </tr>

    <tr>
      <td><code>subscribed_after</code></td>
      <td>Optional. A <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a> datetime. When included, returns only subscribers who were created after the date. Eg. <code>"2016-01-01T00:00:00Z"</code></td>
    </tr>

    <tr>
      <td><code>page</code></td>
      <td>Optional. The page number. Defaults to <code>1</code>.</td>
    </tr>

    <tr>
      <td><code>per_page</code></td>
      <td>Optional. The number of records to be returned on each page. Defaults to <code>100</code>. Maximum <code>1000</code>.</td>
    </tr>
  </tbody>
</table>

## Fetch a subscriber

> To fetch a subscriber:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/subscribers/ID_OR_EMAIL" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

```ruby
require 'drip'

client = Drip::Client.new do |c|
  c.api_key = "YOUR API KEY"
  c.account_id = "YOUR_ACCOUNT_ID"
end

subscriber_email = "john@acme.com"

response = client.subscriber(subscriber_email)

if response.success?
  puts response.body["subscribers"]
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')({ token: YOUR_API_KEY, accountId: YOUR_ACCOUNT_ID });
const idOrEmail = "someone@example.com";

client.fetchSubscriber(idOrEmail)
  .then((response) => {
    // Handle `response.body`
  })
  .catch((error) => {
    // Handle errors
  });
```

> The response looks like this:

```json
# The subscribers property is an array of one object.
{
  "links": { ... },
  "subscribers": [{ ... }]
}
```

### HTTP Endpoint

`GET /:account_id/subscribers/:id_or_email`

### Arguments

None.

## Remove a subscriber from one or all campaigns

> To remove a subscriber from all campaigns:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/subscribers/ID_OR_EMAIL/remove" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

```ruby
##
# To remove a subscriber from all campaigns:
##

require 'drip'

client = Drip::Client.new do |c|
  c.api_key = "YOUR API KEY"
  c.account_id = "YOUR_ACCOUNT_ID"
end

subscriber_email = "john@acme.com"
response = client.unsubscribe(subscriber_email)

if response.success?
  puts response.body["subscribers"]
end

##
# To remove a subscriber from a specific campaign:
##

subscriber_email = "john@acme.com"
options = {
  campaign_id: 9999999
}

response = client.unsubscribe(subscriber_email, options)

if response.success?
  puts response.body["subscribers"]
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')({ token: YOUR_API_KEY, accountId: YOUR_ACCOUNT_ID });
const idOrEmail = "someone@example.com";
const campaignId = 9998888;

client.unsubscribeFromCampaign(idOrEmail, campaignId)
  .then((response) => {
    // Handle `response.body`
  })
  .catch((error) => {
    // Handle errors
  });
```

> To remove a subscriber from a specific campaign:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/subscribers/ID_OR_EMAIL/remove?campaign_id=CAMPAIGN_ID" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

> The response looks like this:

```json
# The subscribers property is an array of one object.
{
  "links": { ... },
  "subscribers": [{ ... }]
}
```

### HTTP Endpoint

`POST /:account_id/subscribers/:id_or_email/remove`

This endpoint was previously labeled `unsubscribe`.

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
      <td><code>campaign_id</code></td>
      <td>Optional. The campaign from which to remove the subscriber. Defaults to all.</td>
    </tr>
  </tbody>
</table>

## Unsubscribe from all mailings

> To unsubscribe a subscriber from all mailings:

```shell
curl -X POST "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/subscribers/ID_OR_EMAIL/unsubscribe_all" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

```ruby
require 'drip'

client = Drip::Client.new do |c|
  c.api_key = "YOUR API KEY"
  c.account_id = "YOUR_ACCOUNT_ID"
end

subscriber_email = "john@acme.com"
response = client.unsubscribe_from_all(subscriber_email)

if response.success?
  puts response.body["subscribers"]
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')({ token: YOUR_API_KEY, accountId: YOUR_ACCOUNT_ID });
const idOrEmail = "someone@example.com";

client.unsubscribeFromAllMailings(idOrEmail)
  .then((response) => {
    // Handle `response.body`
  })
  .catch((error) => {
    // Handle errors
  });
```

> The response looks like this:

```json
# The subscribers property is an array of one object.
{
  "links": { ... },
  "subscribers": [{ ... }]
}
```

### HTTP Endpoint

`POST /:account_id/subscribers/:id_or_email/unsubscribe_all`

### Arguments

None.

## Delete a subscriber

> To delete a subscriber:

```shell
curl -X DELETE "https://api.getdrip.com/v2/YOUR_ACCOUNT_ID/subscribers/ID_OR_EMAIL" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

```ruby
require 'drip'

client = Drip::Client.new do |c|
  c.api_key = "YOUR API KEY"
  c.account_id = "YOUR_ACCOUNT_ID"
end

subscriber_email = "john@acme.com"
response = client.delete_subscriber(subscriber_email)

if response.success?
  # ...
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')({ token: YOUR_API_KEY, accountId: YOUR_ACCOUNT_ID });
const idOrEmail = "someone@example.com";

client.deleteSubscriber(idOrEmail)
  .then((response) => {
    // Handle `response.body`
  })
  .catch((error) => {
    // Handle errors
  });
```

> Responds with `204 No Content` if successful.

### HTTP Endpoint

`DELETE /:account_id/subscribers/:id_or_email`

### Arguments

None.
