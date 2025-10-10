import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The `ArbitraryRuleResponseArray` `meta`.
 */
export class ArbitraryRuleResponseArrayMeta {
  /**
   * The `meta` `total_count`.
   */
  "totalCount"?: number;
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
    totalCount: {
      baseName: "total_count",
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
    return ArbitraryRuleResponseArrayMeta.attributeTypeMap;
  }

  public constructor() {}
}
