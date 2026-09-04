/**
 * Ignore an inferred DEM journey returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DEMApi(configuration);

const params: v2.DEMApiIgnoreInferredJourneyRequest = {
  journeyId: "journey_id",
};

apiInstance
  .ignoreInferredJourney(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
