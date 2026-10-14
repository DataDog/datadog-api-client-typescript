/**
 * Publish experiment protocol returns "OK" response
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

// there is a valid "configured_experiment_protocol" in the system
const CONFIGURED_EXPERIMENT_PROTOCOL_DATA_ID = process.env
  .CONFIGURED_EXPERIMENT_PROTOCOL_DATA_ID as string;

const params: v2.ExperimentsApiPublishExperimentProtocolRequest = {
  protocolId: CONFIGURED_EXPERIMENT_PROTOCOL_DATA_ID,
};

apiInstance
  .publishExperimentProtocol(params)
  .then((data: v2.ExperimentsPublicProtocolResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
