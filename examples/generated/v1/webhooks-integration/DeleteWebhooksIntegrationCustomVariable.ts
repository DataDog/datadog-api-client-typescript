import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

let params: v1.WebhooksIntegrationApiDeleteWebhooksIntegrationCustomVariableRequest =
  {
    // string | The name of the custom variable.
    customVariableName: "custom_variable_name_example",
  };

apiInstance
  .deleteWebhooksIntegrationCustomVariable(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
