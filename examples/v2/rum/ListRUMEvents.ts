/**
 * Get a list of RUM events returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RUMApi(configuration);

apiInstance
  .listRUMEvents()
  .then((data: v2.RUMEventsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
