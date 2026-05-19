/**
 * Add insights to a case returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.addCaseInsights"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiAddCaseInsightsRequest = {
  body: {
    data: {
      attributes: {
        insights: [
          {
            ref: "/monitors/12345?q=total",
            resourceId: "12345",
            type: "SECURITY_SIGNAL",
          },
        ],
      },
      type: "case",
    },
  },
  caseId: "case_id",
};

apiInstance
  .addCaseInsights(params)
  .then((data: v2.CaseResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
