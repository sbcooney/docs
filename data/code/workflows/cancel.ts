const languages = {
  javascript: `
const { Knock } = require("@knocklabs/node");
const knock = new Knock(process.env.KNOCK_API_KEY);

const userInvite = await invites.approve(inviteToken);

await knock.workflows.cancel("new-user-invited", userInvite.id);
  `,
  python: `
from knockapi import Knock
client = Knock(api_key="sk_12345")

client.workflows.cancel(
  key="new-user-invited",
  cancellation_key=user_invite.id,
)
`,
  ruby: `
require "knockapi"
Knock.key = "sk_12345"

Knock::Workflows.cancel(
  key: "new-user-invited",
  cancellation_key: user_invite.id,
)
`,
  csharp: `
var knockClient = new KnockClient(
  new KnockOptions { ApiKey = "sk_12345" });

var options = new CancelWorkflow {
  CancellationKey = userInvite.Id
};

await knockClient.Workflows.Cancel("new-user-invited", options);
`,
  elixir: `
knock_client = MyApp.Knock.client()  

Knock.Workflows.cancel("new-user-invited", user-invite.id)
`,
};

export default languages;