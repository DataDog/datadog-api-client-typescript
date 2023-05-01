/**
 * Search for SLOs returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

// there is a valid "slo" in the system
const SLO_DATA_0_NAME = process.env.SLO_DATA_0_NAME as string;

const params: v1.ServiceLevelObjectivesApiSearchSLORequest = {
  query: SLO_DATA_0_NAME,
  pageSize: 20,
  pageNumber: 0,
};

apiInstance
  .searchSLO(params)
  .then((data: v1.SearchSLOResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
