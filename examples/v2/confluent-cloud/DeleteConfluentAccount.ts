/**
 * Delete Confluent account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ConfluentCloudApi(configuration);

// there is a valid "confluent_account" in the system
const CONFLUENT_ACCOUNT_DATA_ID = process.env
  .CONFLUENT_ACCOUNT_DATA_ID as string;

const params: v2.ConfluentCloudApiDeleteConfluentAccountRequest = {
  accountId: CONFLUENT_ACCOUNT_DATA_ID,
};

apiInstance
  .deleteConfluentAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
