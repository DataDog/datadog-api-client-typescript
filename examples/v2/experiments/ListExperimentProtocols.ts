/**
 * List experiment protocols returns "OK" response
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
const EXPERIMENT_PROTOCOL_DATA_ATTRIBUTES_NAME = process.env
  .EXPERIMENT_PROTOCOL_DATA_ATTRIBUTES_NAME as string;

const params: v2.ExperimentsApiListExperimentProtocolsRequest = {
  filterStatus: ["DRAFT"],
  filterQuery: EXPERIMENT_PROTOCOL_DATA_ATTRIBUTES_NAME,
};

apiInstance
  .listExperimentProtocols(params)
  .then((data: v2.ExperimentsPublicProtocolListResponseArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
