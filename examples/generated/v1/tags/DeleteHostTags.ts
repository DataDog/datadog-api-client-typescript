import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.TagsApi(configuration);

let params:v1.TagsApiDeleteHostTagsRequest = {
  // string | This endpoint allows you to remove all user-assigned tags for a single host.
  hostName: "host_name_example",
  // string | The source of the tags (for example chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). (optional)
  source: "source_example",
};

apiInstance.deleteHostTags(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
