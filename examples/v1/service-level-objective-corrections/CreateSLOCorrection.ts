/**
 * Create an SLO correction returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
configuration.unstableOperations["createSLOCorrection"] = true;
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

// there is a valid "slo" in the system
let SLO_DATA_0_ID = process.env.SLO_DATA_0_ID as string;

let params: v1.ServiceLevelObjectiveCorrectionsApiCreateSLOCorrectionRequest = {
  body: {
    data: {
      attributes: {
        category: "Scheduled Maintenance",
        description: "Example-Create_an_SLO_correction_returns_OK_response",
        end: new Date(new Date().getTime() + 1 * 3600).getTime(),
        sloId: SLO_DATA_0_ID,
        start: new Date().getTime(),
        timezone: "UTC",
      },
      type: "correction",
    },
  },
};

apiInstance
  .createSLOCorrection(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
