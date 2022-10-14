/**
 * Get Confluent account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ConfluentCloudApi(configuration);

// there is a valid "confluent_account" in the system
const CONFLUENT_ACCOUNT_DATA_ID = process.env
  .CONFLUENT_ACCOUNT_DATA_ID as string;

const params: v2.ConfluentCloudApiGetConfluentAccountRequest = {
  accountId: CONFLUENT_ACCOUNT_DATA_ID,
};

apiInstance
  .getConfluentAccount(params)
  .then((data: v2.ConfluentAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
