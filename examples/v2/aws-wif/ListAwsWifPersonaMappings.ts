/**
 * List AWS WIF persona mappings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AWSWIFApi(configuration);

apiInstance
  .listAwsWifPersonaMappings()
  .then((data: v2.AwsWifPersonaMappingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
