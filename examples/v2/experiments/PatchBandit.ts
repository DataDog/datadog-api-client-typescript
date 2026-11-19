/**
 * Update bandit returns "OK" response
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
configuration.unstableOperations["v2.patchBandit"] = true;
const apiInstance = new v2.ExperimentsApi(configuration);

// there is a valid "bandit" in the system
const BANDIT_DATA_ID = process.env.BANDIT_DATA_ID as string;

// there is a valid "feature_flag" in the system
const FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_0_ID = process.env
  .FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_0_ID as string;
const FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_1_ID = process.env
  .FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_1_ID as string;

const params: v2.ExperimentsApiPatchBanditRequest = {
  body: {
    data: {
      type: "bandits",
      id: BANDIT_DATA_ID,
      attributes: {
        name: "bandit-14bb9543f523edde-renamed",
        variants: [
          {
            featureFlagVariantId: FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_0_ID,
          },
          {
            featureFlagVariantId: FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_1_ID,
            isFallback: true,
          },
        ],
      },
    },
  },
  banditId: BANDIT_DATA_ID,
};

apiInstance
  .patchBandit(params)
  .then((data: v2.ExperimentsBanditV2DTO) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
