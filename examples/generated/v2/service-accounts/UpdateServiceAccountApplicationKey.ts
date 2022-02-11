import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

let params: v2.ServiceAccountsApiUpdateServiceAccountApplicationKeyRequest = {
  // string | The ID of the service account.
  serviceAccountId: "00000000-0000-0000-0000-000000000000",
  // string | The ID of the application key.
  appKeyId: "app_key_id_example",
  // ApplicationKeyUpdateRequest
  body: {
    data: {
      attributes: {
        name: "Application Key for managing dashboards",
        scopes: [
          "dashboards_read",
          "dashboards_write",
          "dashboards_public_share",
        ],
      },
      id: "00112233-4455-6677-8899-aabbccddeeff",
      type: "application_keys",
    },
  },
};

apiInstance
  .updateServiceAccountApplicationKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
