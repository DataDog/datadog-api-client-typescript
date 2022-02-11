import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.TagsApi(configuration);

let params:v1.TagsApiListHostTagsRequest = {
  // string | When specified, filters host list to those tags with the specified source. (optional)
  source: "source_example",
};

apiInstance.listHostTags(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
