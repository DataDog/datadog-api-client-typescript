/**
 * Create a target audience returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.GoogleChatIntegrationApi(configuration);

const params: v2.GoogleChatIntegrationApiCreateGoogleChatTargetAudienceRequest =
  {
    body: {
      data: {
        attributes: {
          audienceId: "fake-audience-id-1",
          audienceName: "fake audience name 1",
        },
        type: "google-chat-target-audience",
      },
    },
    organizationBindingId: "organization_binding_id",
  };

apiInstance
  .createGoogleChatTargetAudience(params)
  .then((data: v2.GoogleChatTargetAudienceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
