/**
 * Get Blueprints by Slugs returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AppBuilderApi(configuration);

const params: v2.AppBuilderApiGetBlueprintsBySlugsRequest = {
  slugs: "aws-service-manager",
};

apiInstance
  .getBlueprintsBySlugs(params)
  .then((data: v2.GetBlueprintsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
