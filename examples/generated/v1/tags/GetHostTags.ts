import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.TagsApi(configuration);

let params: v1.TagsApiGetHostTagsRequest = {
  // string | When specified, filters list of tags to those tags with the specified source.
  hostName: "host_name_example",
  // string | Source to filter. (optional)
  source: "source_example",
};

apiInstance
  .getHostTags(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
