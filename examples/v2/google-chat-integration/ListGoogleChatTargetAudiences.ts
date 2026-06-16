/**
 * Get all target audiences returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.GoogleChatIntegrationApi(configuration);

const params: v2.GoogleChatIntegrationApiListGoogleChatTargetAudiencesRequest =
  {
    organizationBindingId: "organization_binding_id",
  };

apiInstance
  .listGoogleChatTargetAudiences(params)
  .then((data: v2.GoogleChatTargetAudiencesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
