import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesAnomalyInvestigationAnomaly } from "./TimeseriesAnomalyInvestigationAnomaly";
import { TimeseriesAnomalyInvestigationCompleteStatus } from "./TimeseriesAnomalyInvestigationCompleteStatus";

/**
 * Completed result for one timeseries request. The anomalies array is empty when no qualifying anomaly is found.
 */
export class TimeseriesAnomalyInvestigationResult {
  /**
   * Detected anomalies. This API version returns at most one anomaly.
   */
  "anomalies": Array<TimeseriesAnomalyInvestigationAnomaly>;
  /**
   * Status value indicating successful completion.
   */
  "status": TimeseriesAnomalyInvestigationCompleteStatus;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    anomalies: {
      baseName: "anomalies",
      type: "Array<TimeseriesAnomalyInvestigationAnomaly>",
      required: true,
    },
    status: {
      baseName: "status",
      type: "TimeseriesAnomalyInvestigationCompleteStatus",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesAnomalyInvestigationResult.attributeTypeMap;
  }

  public constructor() {}
}
