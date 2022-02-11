import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.HostsApi(configuration);

let params:v1.HostsApiMuteHostRequest = {
  // string | Name of the host to mute.
  hostName: "host_name_example",
  // HostMuteSettings | Mute a host request body.
  body: {
    end: 1579098130,
    message: "Muting this host for a test!",
    override: false,
  },
};

apiInstance.muteHost(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
