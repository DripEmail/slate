# Accounts

> Accounts are represented as follows:

```json
{
  "id": "9999999",
  "name": "Acme, Inc.",
  "url": "www.acme.com",
  "default_from_name": "John Doe",
  "default_from_email": "john@acme.com",
  "default_postal_address": "123 Anywhere St\nFresno, CA 99999",
  "primary_email": "john@acme.com",
  "enable_third_party_cookies": false,
  "phone_number": "999-999-9999",
  "created_at": "2013-06-21T10:31:58Z",
  "href": "https://api.getdrip.com/v2/accounts/9999999"
}
```

> All responses containing account data also include the following top-level link data:

```json
{
  "links": {
    "accounts.broadcasts": "https://api.getdrip.com/v2/{accounts.id}/broadcasts",
    "accounts.campaigns": "https://api.getdrip.com/v2/{accounts.id}/campaigns",
    "accounts.goals": "https://api.getdrip.com/v2/{accounts.id}/goals"
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
      <td><code>name</code></td>
      <td>The name assigned to each account. Defaults to the account's website URL.</td>
    </tr>
    <tr>
      <td><code>url</code></td>
      <td>The account's website URL.</td>
    </tr>
    <tr>
      <td><code>default_from_name</code></td>
      <td>A default "from name" that appears in your sent emails and can be changed on a per email basis.</td>
    </tr>
    <tr>
      <td><code>default_from_email</code></td>
      <td>A default "from email" that appears in your sent emails and can be changed on a per email basis.</td>
    </tr>
    <tr>
      <td><code>default_postal_address</code></td>
      <td>As required by the <a href="http://1.usa.gov/YgrzFP" target="_blank">CAN-SPAM Act</a>, this is a default postal address used for all sent emails and can be changed on a per email basis.</td>
    </tr>
    <tr>
      <td><code>primary_email</code></td>
      <td>The account owner's email address.</td>
    </tr>
    <tr>
      <td><code>enable_third_party_cookies</code></td>
      <td>When enabled allows tracking visitors across multiple domains (e.g. you use a shopping cart system hosted on a different site).</td>
    </tr>
    <tr>
      <td><code>phone_number</code></td>
      <td>The account's primary contact number.</td>
    </tr>
    <tr>
      <td><code>created_at</code></td>
      <td>A read-only Drip generated timestamp for when the account was first created.</td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td>The url designated for retrieving the account record via the REST API.</td>
    </tr>
    <tr>
      <td><code>links</code></td>
      <td>An object containing URLs for campaign and conversion resources. Note, conversions are represented as "Goals".</td>
    </tr>
  </tbody>
</table>

## List all accounts

> To list all accounts the authenticated user has access to:

```shell
curl "https://api.getdrip.com/v2/accounts" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

```ruby
require 'drip'

client = Drip::Client.new do |c|
  c.api_key = "YOUR API KEY"
  c.account_id = "YOUR_ACCOUNT_ID"
end

response = client.accounts

if response.success?
  puts response.body["accounts"]
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')({ token: YOUR_API_KEY, accountId: YOUR_ACCOUNT_ID });

client.listAccounts()
  .then((response) => {
    // Handle `response.body`
  })
  .catch((error) => {
    // Handle errors
  });
```

> The response looks like this:

```json
# The accounts property is an array of account objects.
{
  "links": { ... },
  "accounts": [ ... ]
}
```

### HTTP Endpoint

`GET /v2/accounts`

### Arguments

None.

## Fetch an account

> To fetch a specific account:

```shell
curl "https://api.getdrip.com/v2/accounts/ACCOUNT_ID" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u YOUR_API_KEY:
```

```ruby
require 'drip'

client = Drip::Client.new do |c|
  c.api_key = "YOUR API KEY"
  c.account_id = "YOUR_ACCOUNT_ID"
end

account_id = 9999999
response = client.account(account_id)

if response.success?
  puts response.body
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')({ token: YOUR_API_KEY, accountId: YOUR_ACCOUNT_ID });

client.fetchAccount(accountId)
  .then((response) => {
    // Handle `response.body`
  })
  .catch((error) => {
    // Handle errors
  });
```

> The response looks like this:

```json
# The accounts property is an array of one account object.
{
  "links": { ... },
  "accounts": [{ ... }]
}
```

### HTTP Endpoint

`GET /v2/accounts/:account_id`

### Arguments

None.
