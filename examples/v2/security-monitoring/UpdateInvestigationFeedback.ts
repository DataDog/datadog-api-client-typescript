/**
 * Update investigation feedback returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateInvestigationFeedback"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiUpdateInvestigationFeedbackRequest = {
  body: {
    data: {
      attributes: {
        feedback: "positive",
        feedbackContent: [
          {
            id: "section-1",
            metrics: [
              {
                placeholder: "Enter your feedback here",
                prompt: "How helpful was this investigation?",
                response: "Very helpful",
                type: "sentiment",
              },
            ],
            title: "Investigation Quality",
          },
        ],
        incomplete: false,
        rating: "positive",
        signalId: "AAAAAWgN8Xwgr1vKDQAAAABBV2dOOFh3ZzZobm1mWXJFYTR0OA",
        type: "metrics",
      },
      type: "investigation_feedback",
    },
  },
};

apiInstance
  .updateInvestigationFeedback(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
