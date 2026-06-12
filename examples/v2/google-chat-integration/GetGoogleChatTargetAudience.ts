/**
 * Get a target audience returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.GoogleChatIntegrationApi(configuration);

const params: v2.GoogleChatIntegrationApiGetGoogleChatTargetAudienceRequest = {
  organizationBindingId: "organization_binding_id",
  targetAudienceId: "target_audience_id",
};

apiInstance
  .getGoogleChatTargetAudience(params)
  .then((data: v2.GoogleChatTargetAudienceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
