import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Defines how often the rotation repeats, using a combination of days and optional seconds. Should be at least 1 hour.
 */
export class LayerAttributesInterval {
  /**
   * The number of days in each rotation cycle.
   */
  "days"?: number;
  /**
   * Any additional seconds for the rotation cycle (up to 30 days).
   */
  "seconds"?: number;
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
    days: {
      baseName: "days",
      type: "number",
      format: "int32",
    },
    seconds: {
      baseName: "seconds",
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
    return LayerAttributesInterval.attributeTypeMap;
  }

  public constructor() {}
}
