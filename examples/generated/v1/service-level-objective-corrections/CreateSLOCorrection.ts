import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

let params: v1.ServiceLevelObjectiveCorrectionsApiCreateSLOCorrectionRequest = {
  // SLOCorrectionCreateRequest | Create an SLO Correction
  body: {
    data: {
      attributes: {
        category: "Scheduled Maintenance",
        description: "description_example",
        duration: 1600000000,
        end: 1600000000,
        rrule: "FREQ=DAILY;INTERVAL=10;COUNT=5",
        sloId: "sloId",
        start: 1600000000,
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
