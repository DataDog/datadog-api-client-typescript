/**
 * Register a token returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.registerOnPremManagementServiceToken"] =
  true;
const apiInstance = new v2.OnPremManagementServiceApi(configuration);

const params: v2.OnPremManagementServiceApiRegisterOnPremManagementServiceTokenRequest =
  {
    body: {
      data: {
        attributes: {
          appId: "9a93d314-ca37-461d-b18e-0587f03c6e2a",
          appVersion: 5,
          connectionId: "2f66ec56-d1f3-4a18-908d-5e8c12dfb3b0",
          queryId: "8744d459-18aa-405b-821e-df9bb101c01e",
          runnerId: "runner-GBUyh2Tm6oKS6ap4kt8Bbx",
        },
        type: "registerTokenRequest",
      },
    },
  };

apiInstance
  .registerOnPremManagementServiceToken(params)
  .then((data: v2.OnPremManagementServiceRegisterTokenResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
