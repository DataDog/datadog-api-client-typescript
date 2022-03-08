import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentServicesApi(configuration);

let params: v2.IncidentServicesApiListIncidentServicesRequest = {
  // IncidentRelatedObject | Specifies which types of related objects should be included in the response. (optional)
  include: "users",
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific offset to use as the beginning of the returned page. (optional)
  pageOffset: 0,
  // string | A search query that filters services by name. (optional)
  filter: "ExampleServiceName",
};

apiInstance
  .listIncidentServices(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
