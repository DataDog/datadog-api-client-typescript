import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params:v1.ServiceLevelObjectivesApiGetSLOHistoryRequest = {
  // string | The ID of the service level objective object.
  sloId: "slo_id_example",
  // number | The `from` timestamp for the query window in epoch seconds.
  fromTs: 1,
  // number | The `to` timestamp for the query window in epoch seconds.
  toTs: 1,
  // number | The SLO target. If `target` is passed in, the response will include the remaining error budget and a timeframe value of `custom`. (optional)
  target: 0,
  // boolean | Defaults to `true`. If any SLO corrections are applied and this parameter is set to `false`, then the corrections will not be applied and the SLI values will not be affected. (optional)
  applyCorrection: true,
};

apiInstance.getSLOHistory(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
