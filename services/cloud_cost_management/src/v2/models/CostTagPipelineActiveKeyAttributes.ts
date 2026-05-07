import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for an active tag pipeline key.
 */
export class CostTagPipelineActiveKeyAttributes {
  /**
   * The number of tag pipeline rules that set this tag key.
   */
  "ruleCount": number;
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
    ruleCount: {
      baseName: "rule_count",
      type: "number",
      required: true,
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
    return CostTagPipelineActiveKeyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
