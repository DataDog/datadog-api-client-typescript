import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.NotebooksApi(configuration);

let params: v1.NotebooksApiListNotebooksRequest = {
  // string | Return notebooks created by the given `author_handle`. (optional)
  authorHandle: "test@datadoghq.com",
  // string | Return notebooks not created by the given `author_handle`. (optional)
  excludeAuthorHandle: "test@datadoghq.com",
  // number | The index of the first notebook you want returned. (optional)
  start: 0,
  // number | The number of notebooks to be returned. (optional)
  count: 5,
  // string | Sort by field `modified`, `name`, or `created`. (optional)
  sortField: "modified",
  // string | Sort by direction `asc` or `desc`. (optional)
  sortDir: "desc",
  // string | Return only notebooks with `query` string in notebook name or author handle. (optional)
  query: "postmortem",
  // boolean | Value of `false` excludes the `cells` and global `time` for each notebook. (optional)
  includeCells: false,
  // boolean | True value returns only template notebooks. Default is false (returns only non-template notebooks). (optional)
  isTemplate: false,
  // string | If type is provided, returns only notebooks with that metadata type. Default does not have type filtering. (optional)
  type: "investigation",
};

apiInstance
  .listNotebooks(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
