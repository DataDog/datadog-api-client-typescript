import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.ProcessesApi(configuration);

let params: v2.ProcessesApiListProcessesRequest = {
  // string | String to search processes by. (optional)
  search: "search_example",
  // string | Comma-separated list of tags to filter processes by. (optional)
  tags: "account:prod,user:admin",
  // number | Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window will be 15 minutes before the `to` timestamp. If neither `from` nor `to` are provided, the query window will be `[now - 15m, now]`. (optional)
  from: 1,
  // number | Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window will be 15 minutes after the `from` timestamp. If neither `from` nor `to` are provided, the query window will be `[now - 15m, now]`. (optional)
  to: 1,
  // number | Maximum number of results returned. (optional)
  pageLimit: 1000,
  // string | String to query the next page of results. This key is provided with each valid response from the API in `meta.page.after`. (optional)
  pageCursor: "page[cursor]_example",
};

apiInstance
  .listProcesses(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
