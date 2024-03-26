/**
 * Create a new SLO report returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createSLOReportJob"] = true;
const apiInstance = new v2.ServiceLevelObjectivesApi(configuration);

const params: v2.ServiceLevelObjectivesApiCreateSLOReportJobRequest = {
  body: {
    data: {
      attributes: {
        fromTs: 1690901870,
        toTs: 1706803070,
        query: `slo_type:metric "SLO Reporting Test"`,
        interval: "monthly",
        timezone: "America/New_York",
      },
    },
  },
};

apiInstance
  .createSLOReportJob(params)
  .then((data: v2.SLOReportPostResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
