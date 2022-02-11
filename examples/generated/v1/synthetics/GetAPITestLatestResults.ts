import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params: v1.SyntheticsApiGetAPITestLatestResultsRequest = {
  // string | The public ID of the test for which to search results for.
  publicId: "public_id_example",
  // number | Timestamp in milliseconds from which to start querying results. (optional)
  fromTs: 1,
  // number | Timestamp in milliseconds up to which to query results. (optional)
  toTs: 1,
  // Array<string> | Locations for which to query results. (optional)
  probeDc: ["probe_dc_example"],
};

apiInstance
  .getAPITestLatestResults(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
