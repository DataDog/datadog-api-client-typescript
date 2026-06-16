/**
 * Attach security findings to a ServiceNow ticket returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.attachServiceNowTicket"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiAttachServiceNowTicketRequest = {
  body: {
    data: {
      attributes: {
        servicenowTicketUrl:
          "https://example.service-now.com/now/nav/ui/classic/params/target/incident.do?sys_id=abcdef0123456789abcdef0123456789",
      },
      relationships: {
        findings: {
          data: [
            {
              id: "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==",
              type: "findings",
            },
          ],
        },
        project: {
          data: {
            id: "aeadc05e-98a8-11ec-ac2c-da7ad0900001",
            type: "projects",
          },
        },
      },
      type: "servicenow_tickets",
    },
  },
};

apiInstance
  .attachServiceNowTicket(params)
  .then((data: v2.FindingCaseResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
