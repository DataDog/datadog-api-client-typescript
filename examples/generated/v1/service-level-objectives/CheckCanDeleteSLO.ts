import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params:v1.ServiceLevelObjectivesApiCheckCanDeleteSLORequest = {
  // string | A comma separated list of the IDs of the service level objectives objects.
  ids: "id1, id2, id3",
};

apiInstance.checkCanDeleteSLO(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
