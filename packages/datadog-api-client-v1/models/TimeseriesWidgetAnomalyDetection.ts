/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesWidgetAnomalyDetectionSensitivity } from "./TimeseriesWidgetAnomalyDetectionSensitivity";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
