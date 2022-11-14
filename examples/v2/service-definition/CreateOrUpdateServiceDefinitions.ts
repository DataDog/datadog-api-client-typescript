/**
 * Create or update service definition returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ServiceDefinitionApi(configuration);

const params: v2.ServiceDefinitionApiCreateOrUpdateServiceDefinitionsRequest = {
  body: {
    contacts: [
      {
        contact: "contact@datadoghq.com",
        name: "Team Email",
        type: "email",
      },
    ],
    ddService:
      "service-Example-Create_or_update_service_definition_returns_CREATED_response",
    ddTeam: "my-team",
    docs: [
      {
        name: "Architecture",
        provider: "google drive",
        url: "https://gdrive/mydoc",
      },
    ],
    extensions: {
      myorgextension: "extensionvalue",
    },
    integrations: {
      opsgenie: {
        region: "US",
        serviceUrl:
          "https://my-org.opsgenie.com/service/123e4567-e89b-12d3-a456-426614174000",
      },
      pagerduty: "https://my-org.pagerduty.com/service-directory/PMyService",
    },
    links: [
      {
        name: "Runbook",
        type: "runbook",
        url: "https://my-runbook",
      },
    ],
    repos: [
      {
        name: "Source Code",
        provider: "GitHub",
        url: "https://github.com/DataDog/schema",
      },
    ],
    schemaVersion: "v2",
    tags: ["my:tag", "service:tag"],
    team: "my-team",
  },
};

apiInstance
  .createOrUpdateServiceDefinitions(params)
  .then((data: v2.ServiceDefinitionCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
