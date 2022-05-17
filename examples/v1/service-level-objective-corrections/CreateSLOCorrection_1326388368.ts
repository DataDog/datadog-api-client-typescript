/**
 * Create an SLO correction with rrule returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

<<<<<<< HEAD
const configuration = v1.createConfiguration();
||||||| parent of 3bc19178c (Fix examples)
const configuration = v1.createConfiguration();
configuration.unstableOperations["createSLOCorrection"] = true;
=======
const configuration = client.createConfiguration();
configuration.unstableOperations["createSLOCorrection"] = true;
>>>>>>> 3bc19178c (Fix examples)
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

// there is a valid "slo" in the system
const SLO_DATA_0_ID = process.env.SLO_DATA_0_ID as string;

const params: v1.ServiceLevelObjectiveCorrectionsApiCreateSLOCorrectionRequest =
  {
    body: {
      data: {
        attributes: {
          category: "Scheduled Maintenance",
          description:
            "Example-Create_an_SLO_correction_with_rrule_returns_OK_response",
          sloId: SLO_DATA_0_ID,
          start: new Date().getTime() / 1000,
          duration: 3600,
          rrule: "FREQ=DAILY;INTERVAL=10;COUNT=5",
          timezone: "UTC",
        },
        type: "correction",
      },
    },
  };

apiInstance
  .createSLOCorrection(params)
  .then((data: v1.SLOCorrectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
