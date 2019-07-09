# Authentication

> For private integrations, you will need to use your personal API Token (found [here](https://www.getdrip.com/user/edit)) via the `api_key` setting. The API Token is the username portion of the Basic Authentication scheme, with an empty password. (Note the trailing colon to indicate an empty password.)

```ruby
require 'drip-ruby'

client = Drip::Client.new do |c|
  c.api_key = "YOUR_API_KEY"
  c.account_id = "YOUR_ACCOUNT_ID"
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')(
  {
    token: YOUR_API_KEY,
    accountId: YOUR_ACCOUNT_ID
  }
);
```

```shell
curl "api_endpoint_here" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -H 'Authorization: Basic $(echo YOUR_API_KEY: | base64)'

curl "api_endpoint_here" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -u '(YOUR_API_KEY):'
```

> For public integrations, for example, when allowing your customers within your application to authorize access directly to their Drip accounts, pass in the user's OAuth token via the `access_token` setting or pass the `Bearer` token type when using the JS wrapper:

```ruby
client = Drip::Client.new do |c|
  c.access_token = "YOUR_ACCESS_TOKEN"
  c.account_id = "YOUR_ACCOUNT_ID"
end
```

```javascript
// npm install drip-nodejs --save

const client = require('drip-nodejs')(
  {
    token: YOUR_API_KEY,
    tokenType: "Bearer",
    accountId: YOUR_ACCOUNT_ID
  }
);
```

```shell
curl "api_endpoint_here" \
  -H 'User-Agent: Your App Name (www.yourapp.com)' \
  -H 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

The REST API accepts both token-based authentication (intended for private integrations),
and full [OAuth 2](http://oauth.net/2/) authentication (for public integrations).

<aside class="notice">
You must replace <code>YOUR_API_KEY</code> / <code>YOUR_ACCESS_TOKEN</code> with your actual token.
</aside>

## OAuth

<strong>For public integrations with Drip, you must use OAuth based authentication. Here's a quick overview of how to get going.</strong>

1. Get your favorite <a href="http://oauth.net/code/" target="_blank">OAuth Library</a>
2. Register your <a href="https://www.getdrip.com/user/applications" target="_blank">application with us</a>. We will then supply you with an client id and client secret. Please be aware that you must also enter a valid callback url before you will be able to activate your application.
3. Configure your OAuth client with the credentials supplied to you when you created your application. Request authorization at: <code>https://www.getdrip.com/oauth/authorize</code>. You should only have to do this once, as tokens do not expire.
4. Activate your application and you're on your way!

<strong>If you're not going to use a library and will be rolling your own OAuth 2 client, here's the long form of how you can get going.</strong>

```json
{
  "access_token": "822bbf7cd12243df...",
  "token_type": "bearer",
  "scope": "public"
}
```

1. First and foremost remember to register your app with us as outlined above.
2. Once you have registered your app, it will then need to request authorization by redirecting your user to the following url: <br><br><code>https://www.getdrip.com/oauth/authorize?response_type=code&client_id=&lt;your_client_id&gt;&redirect_uri=&lt;your_redirect_uri&gt;</code><br><br>
3. We will then authenticate their Drip account and ask if it's ok to give access to your app.
4. The user will then be redirected back to your app with a verification code that will expire in 10 minutes.
5. Your app will then need to make a request to trade that verification code for an access token: <br><br><code>POST https://www.getdrip.com/oauth/token?response_type=token&client_id=&lt;your_client_id&gt;&client_secret=&lt;your_client_secret&gt;&code=&lt;your_verification_code&gt;&redirect_uri=&lt;your_redirect_uri&gt;&grant_type=authorization_code</code><br><br>
6. We will then authenticate your app and issue you an access token as shown on the right.
7. You can now use that access token in the header of your API requests as follows: <br><br><code>Authorization: Bearer 822bbf7cd12243df...</code>