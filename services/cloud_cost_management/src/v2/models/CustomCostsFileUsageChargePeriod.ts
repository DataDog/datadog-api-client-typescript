import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Usage charge period of a Custom Costs file.
 */
export class CustomCostsFileUsageChargePeriod {
  /**
   * End of the usage of the Custom Costs file.
   */
  "end"?: number;
  /**
   * Start of the usage of the Custom Costs file.
   */
  "start"?: number;
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
    end: {
      baseName: "end",
      type: "number",
      format: "double",
    },
    start: {
      baseName: "start",
      type: "number",
      format: "double",
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
    return CustomCostsFileUsageChargePeriod.attributeTypeMap;
  }

  public constructor() {}
}
