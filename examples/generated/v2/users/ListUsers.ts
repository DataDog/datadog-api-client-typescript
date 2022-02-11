import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

let params: v2.UsersApiListUsersRequest = {
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific page number to return. (optional)
  pageNumber: 0,
  // string | User attribute to order results by. Sort order is ascending by default. Sort order is descending if the field is prefixed by a negative sign, for example `sort=-name`. Options: `name`, `modified_at`, `user_count`. (optional)
  sort: "name",
  // QuerySortOrder | Direction of sort. Options: `asc`, `desc`. (optional)
  sortDir: "desc",
  // string | Filter all users by the given string. Defaults to no filtering. (optional)
  filter: "filter_example",
  // string | Filter on status attribute. Comma separated list, with possible values `Active`, `Pending`, and `Disabled`. Defaults to no filtering. (optional)
  filterStatus: "Active",
};

apiInstance
  .listUsers(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
