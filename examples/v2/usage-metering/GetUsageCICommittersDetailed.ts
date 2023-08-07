/**
 * Get hourly CI Committers Detailed returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiGetUsageCICommittersDetailedRequest = {
  filterTimestampStart: new Date(2021, 11, 11, 11, 11, 11, 111000),
  filterUsageType: "filter[usage_type]",
};

apiInstance
  .getUsageCICommittersDetailed(params)
  .then((data: v2.UsageCICommittersDetailedResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
