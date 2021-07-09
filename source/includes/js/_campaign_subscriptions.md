# Email Series Campaign Subscriptions

## Subscribe to an Email Series Campaign

> Example request

```javascript
_dcq.push(
  [
    "subscribe",
    {
      campaign_id: "9999999",
      fields: {
        email: "john@acme.com"
      },
      success: function(response) {
        // Call a method with the response object
        // Success callback is optional
      }
    }
  ]
);
```

This method will add a subscriber directly to an Email Series Campaign. If you would like to add a subscriber to your account without subscribing them to an Email Series Campaign, use an <a href="#identifying-visitors">identify call</a> instead.

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
      <td>Required. The String campaign ID, which can be found on the Email Series Campaign settings page.</td>
    </tr>
    <tr>
      <td><code>fields</code></td>
      <td>Required. An Object containing the user's data. At minimum, this object must contain an <code>email</code> attribute. If there are any required custom fields, these attributes must also be present.</td>
    </tr>
    <tr>
      <td><code>double_optin</code></td>
      <td>Optional. If <code>true</code>, the double opt-in confirmation email is sent; if <code>false</code>, the confirmation email is skipped. Defaults to the value set on the Email Series Campaign.</td>
    </tr>
    <tr>
      <td><code>success</code></td>
      <td>Optional. A callback function that is executed upon successful completion of the request.</td>
    </tr>
    <tr>
      <td><code>failure</code></td>
      <td>Optional. A callback function that is executed if the request fails.</td>
    </tr>
  </tbody>
</table>

## Unsubscribe a Subscriber

> Example request

```javascript
_dcq.push(
  [
    "unsubscribe",
    {
      campaign_id: "9999999",
      email: "john@acme.com"
    }
  ]
);
```

Use this method to unsubscribe a subscriber from one or all of your Email Series Campaigns.

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
      <td>Required. The String email address of the subscriber you wish to unsubscribe.</td>
    </tr>
    <tr>
      <td><code>campaign_id</code></td>
      <td>Optional. The String campaign ID, which can be found on the Email Series Campaign settings page. If not included, the subscriber will be unsubscribed from all Email Series Campaigns.</td>
    </tr>
    <tr>
      <td><code>success</code></td>
      <td>Optional. A callback function that is executed upon successful completion of the request.</td>
    </tr>
    <tr>
      <td><code>failure</code></td>
      <td>Optional. A callback function that is executed if the request fails.</td>
    </tr>
  </tbody>
</table>