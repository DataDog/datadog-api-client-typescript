/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesAnomalyInvestigationAnomaly } from "./TimeseriesAnomalyInvestigationAnomaly";
import { TimeseriesAnomalyInvestigationCompleteStatus } from "./TimeseriesAnomalyInvestigationCompleteStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
