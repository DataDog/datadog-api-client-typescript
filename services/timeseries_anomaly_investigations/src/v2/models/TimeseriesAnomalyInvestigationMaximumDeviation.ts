import { AttributeTypeMap } from "@datadog/datadog-api-client";

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
