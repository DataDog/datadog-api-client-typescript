/**
 * Create metric collection returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.ExperimentsApi(configuration);

const params: v2.ExperimentsApiCreateMetricCollectionRequest = {
  body: {
    data: {
      type: "metric-collections",
      attributes: {
        name: "ex-14bb9543f523edde",
      },
    },
  },
};

apiInstance
  .createMetricCollection(params)
  .then((data: v2.ExperimentsMetricCollectionV2DTO) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
