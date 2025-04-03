import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The object containing the aggregates.
 */
export class UsageAttributionAggregatesBody {
  /**
   * The aggregate type.
   */
  "aggType"?: string;
  /**
   * The field.
   */
  "field"?: string;
  /**
   * The value for a given field.
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
    aggType: {
      baseName: "agg_type",
      type: "string",
    },
    field: {
      baseName: "field",
      type: "string",
    },
    value: {
      baseName: "value",
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
    return UsageAttributionAggregatesBody.attributeTypeMap;
  }

  public constructor() {}
}
