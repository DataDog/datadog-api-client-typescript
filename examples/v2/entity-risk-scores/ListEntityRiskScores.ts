/**
 * List Entity Risk Scores returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listEntityRiskScores"] = true;
const apiInstance = new v2.EntityRiskScoresApi(configuration);

apiInstance
  .listEntityRiskScores()
  .then((data: v2.SecurityEntityRiskScoresResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
