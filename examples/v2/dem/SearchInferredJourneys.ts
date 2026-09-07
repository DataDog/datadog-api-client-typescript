/**
 * Search inferred DEM journeys returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DEMApi(configuration);

apiInstance
  .searchInferredJourneys()
  .then((data: v2.DemSearchInferredJourneysResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
