/**
 * Create experiment protocol returns "Created" response
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

const params: v2.ExperimentsApiCreateExperimentProtocolRequest = {
  body: {
    data: {
      type: "protocols",
      attributes: {
        name: "ex-protocol-14bb9543f523edde",
        description: "Protocol created by the API test.",
      },
    },
  },
};

apiInstance
  .createExperimentProtocol(params)
  .then((data: v2.ExperimentsPublicProtocolResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
