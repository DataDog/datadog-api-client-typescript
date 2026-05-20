/**
 * Simple search experimentation entities returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.simpleSearchLLMObsExperimentation"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiSimpleSearchLLMObsExperimentationRequest = {
  body: {
    data: {
      attributes: {
        contentPreview: {
          limit: 500,
        },
        filter: {
          includeDeleted: false,
          isDeleted: false,
          query: "my experiment",
          scope: ["experiments"],
          version: undefined,
        },
        include: {
          userData: false,
        },
        page: {
          limit: 50,
          number: 1,
        },
        sort: [
          {
            direction: "desc",
            field: "created_at",
          },
        ],
      },
      type: "experimentation",
    },
  },
};

apiInstance
  .simpleSearchLLMObsExperimentation(params)
  .then((data: v2.LLMObsExperimentationSimpleSearchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
