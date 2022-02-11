import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

let params:v2.LogsArchivesApiRemoveRoleFromArchiveRequest = {
  // string | The ID of the archive.
  archiveId: "archive_id_example",
  // RelationshipToRole
  body: {
    data: {
      id: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
      type: "roles",
    },
  },
};

apiInstance.removeRoleFromArchive(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
