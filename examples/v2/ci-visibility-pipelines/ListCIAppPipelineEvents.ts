/**
 * Get a list of pipelines events returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CIVisibilityPipelinesApi(configuration);

const params: v2.CIVisibilityPipelinesApiListCIAppPipelineEventsRequest = {
  filterQuery: "@ci.provider.name:circleci",
  filterFrom: new Date(new Date().getTime() + -30 * 60 * 1000),
  filterTo: new Date(),
  pageLimit: 5,
};

apiInstance
  .listCIAppPipelineEvents(params)
  .then((data: v2.CIAppPipelineEventsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
