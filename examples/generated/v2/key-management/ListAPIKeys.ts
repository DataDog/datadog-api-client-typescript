import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiListAPIKeysRequest = {
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific page number to return. (optional)
  pageNumber: 0,
  // APIKeysSort | API key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign. (optional)
  sort: "name",
  // string | Filter API keys by the specified string. (optional)
  filter: "filter_example",
  // string | Only include API keys created on or after the specified date. (optional)
  filterCreatedAtStart: "2020-11-24T18:46:21+00:00",
  // string | Only include API keys created on or before the specified date. (optional)
  filterCreatedAtEnd: "2020-11-24T18:46:21+00:00",
  // string | Only include API keys modified on or after the specified date. (optional)
  filterModifiedAtStart: "2020-11-24T18:46:21+00:00",
  // string | Only include API keys modified on or before the specified date. (optional)
  filterModifiedAtEnd: "2020-11-24T18:46:21+00:00",
  // string | Comma separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `modified_by`. (optional)
  include: "created_by,modified_by",
};

apiInstance.listAPIKeys(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
