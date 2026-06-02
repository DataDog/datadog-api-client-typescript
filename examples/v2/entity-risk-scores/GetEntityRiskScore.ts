/**
 * Get Entity Risk Score returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getEntityRiskScore"] = true;
const apiInstance = new v2.EntityRiskScoresApi(configuration);

const params: v2.EntityRiskScoresApiGetEntityRiskScoreRequest = {
  entityId: "arn:aws:iam::123456789012:user/john.doe",
};

apiInstance
  .getEntityRiskScore(params)
  .then((data: v2.SecurityEntityRiskScoreResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
