import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * X Axis controls for the distribution widget.
 */
export class DistributionWidgetXAxis {
  /**
   * True includes zero.
   */
  "includeZero"?: boolean;
  /**
   * Specifies maximum value to show on the x-axis. It takes a number, percentile (p90 === 90th percentile), or auto for default behavior.
   */
  "max"?: string;
  /**
   * Specifies minimum value to show on the x-axis. It takes a number, percentile (p90 === 90th percentile), or auto for default behavior.
   */
  "min"?: string;
  /**
   * Number of value buckets to target, also known as the resolution of the value bins.
   */
  "numBuckets"?: number;
  /**
   * Specifies the scale type. Possible values are `linear`.
   */
  "scale"?: string;
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
    includeZero: {
      baseName: "include_zero",
      type: "boolean",
    },
    max: {
      baseName: "max",
      type: "string",
    },
    min: {
      baseName: "min",
      type: "string",
    },
    numBuckets: {
      baseName: "num_buckets",
      type: "number",
      format: "int64",
    },
    scale: {
      baseName: "scale",
      type: "string",
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
    return DistributionWidgetXAxis.attributeTypeMap;
  }

  public constructor() {}
}
