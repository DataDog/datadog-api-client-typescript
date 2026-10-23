/**
 * Replace experiment protocol returns "OK" response
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

// there is a valid "published_protocol" in the system
const PUBLISHED_PROTOCOL_DATA_ATTRIBUTES_UPDATED_AT = process.env
  .PUBLISHED_PROTOCOL_DATA_ATTRIBUTES_UPDATED_AT as string;
const PUBLISHED_PROTOCOL_DATA_ID = process.env
  .PUBLISHED_PROTOCOL_DATA_ID as string;

// there is a valid "experiment_subject_type" in the system
const EXPERIMENT_SUBJECT_TYPE_DATA_ID = process.env
  .EXPERIMENT_SUBJECT_TYPE_DATA_ID as string;

const params: v2.ExperimentsApiReplaceExperimentProtocolRequest = {
  body: {
    data: {
      type: "protocols",
      id: PUBLISHED_PROTOCOL_DATA_ID,
      attributes: {
        subjectTypeId: EXPERIMENT_SUBJECT_TYPE_DATA_ID,
        isEqualSplitEnforced: false,
        isMinimumDurationEnabled: false,
        isDurationRequiredToStart: false,
        isMetricLimitEnabled: false,
        metricGroups: [],
        defaultDurationDays: 14,
      },
    },
  },
  protocolId: PUBLISHED_PROTOCOL_DATA_ID,
  expectedUpdatedAt: PUBLISHED_PROTOCOL_DATA_ATTRIBUTES_UPDATED_AT,
};

apiInstance
  .replaceExperimentProtocol(params)
  .then((data: v2.ExperimentsPublicProtocolResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
