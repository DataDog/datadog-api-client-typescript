/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Most anomalous point within the detected interval.
 */
export class TimeseriesAnomalyInvestigationMaximumDeviation {
  /**
   * Absolute distance between the observed value and the nearest anomaly boundary.
   */
  "deltaFromBoundary": number;
  /**
   * Point timestamp in milliseconds since the Unix epoch.
   */
  "timestamp": number;
  /**
   * Observed value at the point.
   */
  "value": number;

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
    deltaFromBoundary: {
      baseName: "delta_from_boundary",
      type: "number",
      required: true,
      format: "double",
    },
    timestamp: {
      baseName: "timestamp",
      type: "number",
      required: true,
      format: "int64",
    },
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "double",
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
    return TimeseriesAnomalyInvestigationMaximumDeviation.attributeTypeMap;
  }

  public constructor() {}
}
