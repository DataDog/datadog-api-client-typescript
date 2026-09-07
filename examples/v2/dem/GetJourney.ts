/**
 * Get a DEM journey returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DEMApi(configuration);

const params: v2.DEMApiGetJourneyRequest = {
  journeyId: "journey_id",
};

apiInstance
  .getJourney(params)
  .then((data: v2.DemJourneyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
