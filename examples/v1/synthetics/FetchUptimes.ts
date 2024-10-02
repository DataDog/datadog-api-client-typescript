/**
 * Fetch uptime for multiple tests returns "OK." response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiFetchUptimesRequest = {
  body: {
    fromTs: 1726041488,
    publicIds: ["p8m-9gw-nte"],
    toTs: 1726055954,
  },
};

apiInstance
  .fetchUptimes(params)
  .then((data: v1.SyntheticsTestUptime[]) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
