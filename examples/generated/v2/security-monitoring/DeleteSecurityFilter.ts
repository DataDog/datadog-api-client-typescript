import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiDeleteSecurityFilterRequest = {
  // string | The ID of the security filter.
  securityFilterId: "security_filter_id_example",
};

apiInstance
  .deleteSecurityFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
