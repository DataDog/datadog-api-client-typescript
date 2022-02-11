import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiListDashboardsRequest = {
  // boolean | When `true`, this query only returns shared custom created or cloned dashboards. (optional)
  filterShared: true,
  // boolean | When `true`, this query returns only deleted custom-created or cloned dashboards. This parameter is incompatible with `filter[shared]`. (optional)
  filterDeleted: true,
};

apiInstance
  .listDashboards(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
