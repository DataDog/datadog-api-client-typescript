/**
 * Search LLM Observability experimentation entities returns "Partial Content — more results are available. Use
 * `meta.after` as the next `page.cursor`." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.searchLLMObsExperimentation"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiSearchLLMObsExperimentationRequest = {
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
          limit: 100,
        },
      },
      type: "experimentation",
    },
  },
};

apiInstance
  .searchLLMObsExperimentation(params)
  .then((data: v2.LLMObsExperimentationSearchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
