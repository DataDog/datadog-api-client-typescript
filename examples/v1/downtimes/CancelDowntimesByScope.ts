/**
 * Cancel downtimes by scope returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

// there is a valid "downtime" in the system
let DOWNTIME_SCOPE_0 = process.env.DOWNTIME_SCOPE_0 as string;

let params: v1.DowntimesApiCancelDowntimesByScopeRequest = {
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
