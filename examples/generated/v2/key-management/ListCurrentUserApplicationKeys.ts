import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params: v2.KeyManagementApiListCurrentUserApplicationKeysRequest = {
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific page number to return. (optional)
  pageNumber: 0,
  // ApplicationKeysSort | Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign. (optional)
  sort: "name",
  // string | Filter application keys by the specified string. (optional)
  filter: "filter_example",
  // string | Only include application keys created on or after the specified date. (optional)
  filterCreatedAtStart: "2020-11-24T18:46:21+00:00",
  // string | Only include application keys created on or before the specified date. (optional)
  filterCreatedAtEnd: "2020-11-24T18:46:21+00:00",
};

apiInstance
  .listCurrentUserApplicationKeys(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
