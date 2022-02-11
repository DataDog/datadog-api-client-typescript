import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.AuthNMappingsApi(configuration);

let params:v2.AuthNMappingsApiListAuthNMappingsRequest = {
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific page number to return. (optional)
  pageNumber: 0,
  // AuthNMappingsSort | Sort AuthN Mappings depending on the given field. (optional)
  sort: "created_at",
  // Array<string> (optional)
  include: [
    "include_example",
  ],
  // string | Filter all mappings by the given string. (optional)
  filter: "filter_example",
};

apiInstance.listAuthNMappings(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
