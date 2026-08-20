import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A return period definition, such as "1 week".
 */
export class ProductAnalyticsRetentionPeriod {
  /**
   * Time unit of the period, such as `day`, `week`, `month`, or `year`.
   */
  "unit"?: string;
  /**
   * Length of the period, expressed in `unit`.
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
    unit: {
      baseName: "unit",
      type: "string",
    },
    value: {
      baseName: "value",
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
    return ProductAnalyticsRetentionPeriod.attributeTypeMap;
  }

  public constructor() {}
}
