const languages = {
  curl: `
# Find the channel_id in your Knock dashboard under Integrations > Channels
curl -X DELETE https://api.knock.app/v1/objects/projects/project-1/channel_data/8209f26c-62a5-461d-95e2-a5716a26e652 \\
  -H "Authorization: Bearer sk_test_12345"
`,
  node: `
import { Knock } from "@knocklabs/node";
const knockClient = new Knock("sk_12345");

// Find this value in your Knock dashboard under Integrations > Channels
const KNOCK_CHANNEL_ID = "8209f26c-62a5-461d-95e2-a5716a26e652";

await knockClient.objects.unsetChannelData(
  "projects",
  project.id,
  KNOCK_CHANNEL_ID
);
`,
  elixir: `
knock_client = MyApp.Knock.client()

# Find this value in your Knock dashboard under Integrations > Channels
knock_channel_id = "8209f26c-62a5-461d-95e2-a5716a26e652"

Knock.Objects.unset_channel_data(knock_client, "projects", project.id, knock_channel_id)
  `,
  python: `
from knockapi import Knock
client = Knock(api_key="sk_12345")

# Find this value in your Knock dashboard under Integrations > Channels
knock_channel_id = "8209f26c-62a5-461d-95e2-a5716a26e652"

client.objects.unset_channel_data(
  collection="projects",
  id=project.id,
  channel_id=knock_channel_id, 
)
  `,
  ruby: `
require "knock"
Knock.key = "sk_12345"

# Find this value in your Knock dashboard under Integrations > Channels
knock_channel_id = "8209f26c-62a5-461d-95e2-a5716a26e652"

Knock::Objects.unset_channel_data(
  collection: "projects",
  id: project.id,
  channel_id: knock_channel_id
)  
`,
  csharp: `
var knockClient = new KnockClient(
  new KnockOptions { ApiKey = "sk_12345" });

// Find this value in your Knock dashboard under Integrations > Channels
var knockChannelId = "8209f26c-62a5-461d-95e2-a5716a26e652";

await knockClient.Objects.SetChannelData(
  "projects", 
  project.Id, 
  knockChannelId
);
`,
  php: `
use Knock\\KnockSdk\\Client;
    
$client = new Client('sk_12345');

// Find this value in your Knock dashboard under Integrations > Channels
$knockChannelId = "8209f26c-62a5-461d-95e2-a5716a26e652";

$client->objects()->unsetChannelData('projects', 'project-1', $knockChannelId);
`,
  go: `
ctx := context.Background()
knockClient, _ := knock.NewClient(knock.WithAccessToken("sk_12345"))

// Find this value in your Knock dashboard under Integrations > Channels
knockChannelID := "8209f26c-62a5-461d-95e2-a5716a26e652"

response, _ := knockClient.Objects.DeleteChannelData(ctx, &knock.DeleteObjectChannelDataRequest{
  Collection: "projects",
  ID:         "project-1",
  ChannelID:  knockChannelID,
})
`,
  java: `
import app.knock.api.KnockClient;
import app.knock.api.model.*;

KnockClient client = KnockClient.builder()
    .apiKey("sk_12345")
    .build();

// Find this value in your Knock dashboard under Integrations > Channels
String knockChannelId = "8209f26c-62a5-461d-95e2-a5716a26e652";

client.objects().unsetChannelData("projects", "project-1", knockChannelId);
`,
};

export default languages;
