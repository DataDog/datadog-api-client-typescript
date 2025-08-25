/**
 * Update Confluent account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ConfluentCloudApi(configuration);

// there is a valid "confluent_account" in the system
const CONFLUENT_ACCOUNT_DATA_ATTRIBUTES_API_KEY = process.env
  .CONFLUENT_ACCOUNT_DATA_ATTRIBUTES_API_KEY as string;
const CONFLUENT_ACCOUNT_DATA_ID = process.env
  .CONFLUENT_ACCOUNT_DATA_ID as string;

const params: v2.ConfluentCloudApiUpdateConfluentAccountRequest = {
  body: {
    data: {
      attributes: {
        apiKey: CONFLUENT_ACCOUNT_DATA_ATTRIBUTES_API_KEY,
        apiSecret: "update-secret",
        tags: ["updated_tag:val"],
      },
      type: "confluent-cloud-accounts",
    },
  },
  accountId: CONFLUENT_ACCOUNT_DATA_ID,
};

apiInstance
  .updateConfluentAccount(params)
  .then((data: v2.ConfluentAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
