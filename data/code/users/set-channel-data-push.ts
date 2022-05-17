const languages = {
  javascript: `
const { Knock } = require("@knocklabs/node");
const knockClient = new Knock("sk_12345");

const CHANNEL_ID = "8209f26c-62a5-461d-95e2-a5716a26e652";

await knockClient.users.setChannelData("jhammond", CHANNEL_ID, {
  tokens: [userDeviceToken],
});
  `,
  python: `
from knockapi import Knock
client = Knock(api_key="sk_12345")

client.users.set_channel_data(
  id=user.id, 
  channel_id="8209f26c-62a5-461d-95e2-a5716a26e652"
  channel_data={
    "tokens": [user_device_token]
  }
)
  `,
  ruby: `
require "knockapi"

Knock.key = "sk_12345"

Knock::Users.set_channel_data(
  id: user.id,
  channel_id: "8209f26c-62a5-461d-95e2-a5716a26e652",
  channel_data: {
    tokens: [user_device_token]
  }
)  
`,
  csharp: `
var knockClient = new KnockClient(
  new KnockOptions { ApiKey = "sk_12345" });

var channelData = new Dictionary<string, object>{
  { "tokens", new List<string> { userDeviceToken } }
};

var channelId = "8209f26c-62a5-461d-95e2-a5716a26e652";

await knockClient.Users.SetChannelData(user.Id, channelId, channelData);  
`,
  elixir: `
knock_client = MyApp.Knock.client()

Knock.Users.set_channel_data(knock_client, user.id, "8209f26c-62a5-461d-95e2-a5716a26e652", %{
  tokens: [user_device_token],
})
  `,
};

export default languages;