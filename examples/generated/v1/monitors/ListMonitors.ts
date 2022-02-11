import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params: v1.MonitorsApiListMonitorsRequest = {
  // string | When specified, shows additional information about the group states. Choose one or more from `all`, `alert`, `warn`, and `no data`. (optional)
  groupStates: "alert",
  // string | A string to filter monitors by name. (optional)
  name: "name_example",
  // string | A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope. For example, `host:host0`. (optional)
  tags: "host:host0",
  // string | A comma separated list indicating what service and/or custom tags, if any, should be used to filter the list of monitors. Tags created in the Datadog UI automatically have the service key prepended. For example, `service:my-app`. (optional)
  monitorTags: "service:my-app",
  // boolean | If this argument is set to true, then the returned data includes all current active downtimes for each monitor. (optional)
  withDowntimes: true,
  // number | Use this parameter for paginating through large sets of monitors. Start with a value of zero, make a request, set the value to the last ID of result set, and then repeat until the response is empty. (optional)
  idOffset: 1,
  // number | The page to start paginating from. If this argument is not specified, the request returns all monitors without pagination. (optional)
  page: 0,
  // number | The number of monitors to return per page. If the page argument is not specified, the default behavior returns all monitors without a `page_size` limit. However, if page is specified and `page_size` is not, the argument defaults to 100. (optional)
  pageSize: 20,
};

apiInstance
  .listMonitors(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
