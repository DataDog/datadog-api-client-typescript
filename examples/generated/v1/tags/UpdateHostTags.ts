import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.TagsApi(configuration);

let params: v1.TagsApiUpdateHostTagsRequest = {
  // string | This endpoint allows you to update/replace all in an integration source with those supplied in the request.
  hostName: "host_name_example",
  // HostTags | Add tags to host
  body: {
    host: "test.host",
    tags: ["environment:production"],
  },
  // string | The source of the tags (for example chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value) (optional)
  source: "source_example",
};

apiInstance
  .updateHostTags(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
