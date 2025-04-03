import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Usage amount for a given usage type.
 */
export class HourlyUsageMeasurement {
  /**
   * Type of usage.
   */
  "usageType"?: string;
  /**
   * Contains the number measured for the given usage_type during the hour.
   */
  "value"?: number;
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
    usageType: {
      baseName: "usage_type",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HourlyUsageMeasurement.attributeTypeMap;
  }

  public constructor() {}
}
