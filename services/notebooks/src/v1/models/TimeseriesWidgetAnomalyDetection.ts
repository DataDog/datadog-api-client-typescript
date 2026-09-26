import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesWidgetAnomalyDetectionSensitivity } from "./TimeseriesWidgetAnomalyDetectionSensitivity";

/**
 * Anomaly detection configuration for a timeseries widget.
 */
export class TimeseriesWidgetAnomalyDetection {
  /**
   * Sensitivity level for anomaly detection. Use `never_detect` to disable anomaly detection.
   */
  "detectionSensitivity": TimeseriesWidgetAnomalyDetectionSensitivity;
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
    detectionSensitivity: {
      baseName: "detection_sensitivity",
      type: "TimeseriesWidgetAnomalyDetectionSensitivity",
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
    return TimeseriesWidgetAnomalyDetection.attributeTypeMap;
  }

  public constructor() {}
}
