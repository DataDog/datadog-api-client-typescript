/**
 * Cancel downtimes by scope returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

// there is a valid "downtime" in the system
const DOWNTIME_SCOPE_0 = process.env.DOWNTIME_SCOPE_0 as string;

const params: v1.DowntimesApiCancelDowntimesByScopeRequest = {
  body: {
    scope: DOWNTIME_SCOPE_0,
  },
};

apiInstance
  .cancelDowntimesByScope(params)
  .then((data: v1.CanceledDowntimesIds) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
