/**
 * Update experiment protocol returns "OK" response
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

// there is a valid "experiment_protocol" in the system
const EXPERIMENT_PROTOCOL_DATA_ID = process.env
  .EXPERIMENT_PROTOCOL_DATA_ID as string;

const params: v2.ExperimentsApiPatchExperimentProtocolRequest = {
  body: {
    data: {
      type: "protocols",
      id: EXPERIMENT_PROTOCOL_DATA_ID,
      attributes: {
        description: "Updated protocol description.",
      },
    },
  },
  protocolId: EXPERIMENT_PROTOCOL_DATA_ID,
};

apiInstance
  .patchExperimentProtocol(params)
  .then((data: v2.ExperimentsPublicProtocolResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
