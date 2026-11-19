/**
 * Create bandit returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createBandit"] = true;
const apiInstance = new v2.ExperimentsApi(configuration);

// there is a valid "feature_flag" in the system
const FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_0_ID = process.env
  .FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_0_ID as string;
const FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_1_ID = process.env
  .FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_1_ID as string;
const FEATURE_FLAG_DATA_ID = process.env.FEATURE_FLAG_DATA_ID as string;

// there is a valid "environment" in the system
const ENVIRONMENT_DATA_ID = process.env.ENVIRONMENT_DATA_ID as string;

// there is a valid "experiment_subject_type" in the system
const EXPERIMENT_SUBJECT_TYPE_DATA_ID = process.env
  .EXPERIMENT_SUBJECT_TYPE_DATA_ID as string;

const params: v2.ExperimentsApiCreateBanditRequest = {
  body: {
    data: {
      type: "bandits",
      attributes: {
        name: "bandit-14bb9543f523edde",
        datadogFlagConfiguration: {
          featureFlagId: FEATURE_FLAG_DATA_ID,
          environmentId: ENVIRONMENT_DATA_ID,
          targetingRules: [],
        },
        variants: [
          {
            featureFlagVariantId: FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_0_ID,
            isFallback: true,
          },
          {
            featureFlagVariantId: FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_1_ID,
          },
        ],
        subjectTypeId: EXPERIMENT_SUBJECT_TYPE_DATA_ID,
        tags: ["bdd"],
      },
    },
  },
};

apiInstance
  .createBandit(params)
  .then((data: v2.ExperimentsBanditV2DTO) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
