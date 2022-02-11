import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.TagsApi(configuration);

let params:v1.TagsApiCreateHostTagsRequest = {
  // string | This endpoint allows you to add new tags to a host, optionally specifying where the tags came from.
  hostName: "host_name_example",
  // HostTags | Update host tags request body.
  body: {
    host: "test.host",
    tags: [
      "environment:production",
    ],
  },
  // string | The source of the tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). (optional)
  source: "chef",
};

apiInstance.createHostTags(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
