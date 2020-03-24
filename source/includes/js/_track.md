# Tracking Events

## Tracking Events and Conversions for subscribers

> Example track request

```javascript
_dcq.push(
  [
    "track", "Signed up for a trial",
    { value: 2000 }
  ]
);
```

The <code>track</code> method is appropriate when you cannot trigger conversions by URL or you simply wish to record an particular action that the user has taken. The second argument is the name of the <code>action</code> to be recorded. If the <code>action</code> matches the name of a goal, then we will trigger a conversion.

### Properties

The following are treated as special properties. All other data passed in will be saved as custom event properties.

<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>value</code></td>
      <td>Optional. An Integer value (in cents). If the event triggers a conversion, this will be used as the conversion value. Must be within the range of 0 to 2,147,483,647.</td>
    </tr>
    <tr>
      <td><code>occurred_at</code></td>
      <td>Optional. The String time at which the event occurred in <a href="http://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO-8601</a> format. Defaults to the current time.</td>
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

> Example response

```json
{
  success: true,
  visitor_uuid: "f627ee608adb01315d1022000ab2058a",
  anonymous: false
}
```

### Response

The track request will return a response object that can be passed into the callback functions.

<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>success</code></td>
      <td>Boolean. True if the call to Drip succeeded.</td>
    </tr>
    <tr>
      <td><code>visitor_uuid</code></td>
      <td>The unique id for the visitor identified.</td>
    </tr>
    <tr>
      <td><code>anonymous</code></td>
      <td>Boolean. False if the visitor is associated with a subscriber.</td>
    </tr>
    <tr>
      <td><code>error</code></td>
      <td>String. Contains an error message if the request failed.</td>
    </tr>
  </tbody>
</table>
