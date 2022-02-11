import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

let params:v1.ServiceLevelObjectiveCorrectionsApiDeleteSLOCorrectionRequest = {
  // string | The ID of the SLO correction object.
  sloCorrectionId: "slo_correction_id_example",
};

apiInstance.deleteSLOCorrection(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
