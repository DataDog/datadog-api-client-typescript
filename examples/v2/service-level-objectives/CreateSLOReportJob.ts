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
        fromTs: Math.round(
          new Date(new Date().getTime() + -40 * 86400 * 1000).getTime() / 1000
        ),
        toTs: Math.round(new Date().getTime() / 1000),
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
