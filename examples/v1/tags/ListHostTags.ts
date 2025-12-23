/**
 * Get All Host Tags returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.TagsApi(configuration);

apiInstance
  .listHostTags()
  .then((data: v1.TagToHosts) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
