import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

let params: v1.MetricsApiQueryMetricsRequest = {
  // number | Start of the queried time period, seconds since the Unix epoch.
  from: 1,
  // number | End of the queried time period, seconds since the Unix epoch.
  to: 1,
  // string | Query string.
  query: "query_example",
};

apiInstance
  .queryMetrics(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
