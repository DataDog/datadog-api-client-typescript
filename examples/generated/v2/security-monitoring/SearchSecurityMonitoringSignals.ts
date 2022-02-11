import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest = {
  // SecurityMonitoringSignalListRequest (optional)
  body: {
    filter: {
      from: new Date("2019-01-02T09:42:36.32Z"),
      query: "security:attack status:high",
      to: new Date("2019-01-03T09:42:36.32Z"),
    },
    page: {
      cursor:
        "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==",
      limit: 25,
    },
    sort: "timestamp",
  },
};

apiInstance
  .searchSecurityMonitoringSignals(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
