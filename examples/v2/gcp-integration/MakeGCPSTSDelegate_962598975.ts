/**
 * Create a Datadog GCP principal with empty body returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.GCPIntegrationApi(configuration);

const params: v2.GCPIntegrationApiMakeGCPSTSDelegateRequest = {
  body: {},
};

apiInstance
  .makeGCPSTSDelegate(params)
  .then((data: v2.GCPSTSDelegateAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
