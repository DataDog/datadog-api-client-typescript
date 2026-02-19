/**
 * Set up rules for organization returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.setupScorecardRules"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

const params: v2.ServiceScorecardsApiSetupScorecardRulesRequest = {
  body: {
    data: {
      attributes: {
        disabledDefaultRules: ["q8MQxk8TCqrHnWkx", "r9NRyl9UDrsIoXly"],
      },
      type: "setup",
    },
  },
};

apiInstance
  .setupScorecardRules(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
