import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * X Axis controls for the heat map widget.
 */
export class HeatMapWidgetXAxis {
  /**
   * Number of time buckets to target, also known as the resolution
   * of the time bins. This is only applicable for distribution of
   * points (group distributions use the roll-up modifier).
   */
  "numBuckets"?: number;
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
    numBuckets: {
      baseName: "num_buckets",
      type: "number",
      format: "int64",
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
    return HeatMapWidgetXAxis.attributeTypeMap;
  }

  public constructor() {}
}
