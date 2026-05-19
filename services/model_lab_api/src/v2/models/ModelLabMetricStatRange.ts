import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The range of values for a specific metric statistic.
 */
export class ModelLabMetricStatRange {
  /**
   * The maximum value of the statistic.
   */
  "max": number;
  /**
   * The minimum value of the statistic.
   */
  "min": number;
  /**
   * The metric statistic name.
   */
  "stat": string;
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
    max: {
      baseName: "max",
      type: "number",
      required: true,
      format: "double",
    },
    min: {
      baseName: "min",
      type: "number",
      required: true,
      format: "double",
    },
    stat: {
      baseName: "stat",
      type: "string",
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
    return ModelLabMetricStatRange.attributeTypeMap;
  }

  public constructor() {}
}
