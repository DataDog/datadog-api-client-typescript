import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params: v1.MonitorsApiSearchMonitorsRequest = {
  // string | After entering a search query in your [Manage Monitor page][1] use the query parameter value in the URL of the page as value for this parameter. Consult the dedicated [manage monitor documentation][2] page to learn more.  The query can contain any number of space-separated monitor attributes, for instance `query=\"type:metric status:alert\"`.  [1]: https://app.datadoghq.com/monitors/manage [2]: /monitors/manage/#find-the-monitors (optional)
  query: "query_example",
  // number | Page to start paginating from. (optional)
  page: 0,
  // number | Number of monitors to return per page. (optional)
  perPage: 30,
  // string | String for sort order, composed of field and sort order separate by a comma, for example `name,asc`. Supported sort directions: `asc`, `desc`. Supported fields:  * `name` * `status` * `tags` (optional)
  sort: "sort_example",
};

apiInstance
  .searchMonitors(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
