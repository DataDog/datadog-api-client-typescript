import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems` object.
 */
export class RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems {
  /**
   * The `items` `input_column`.
   */
  "inputColumn": string;
  /**
   * The `items` `output_key`.
   */
  "outputKey": string;
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
    inputColumn: {
      baseName: "input_column",
      type: "string",
      required: true,
    },
    outputKey: {
      baseName: "output_key",
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
    return RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems.attributeTypeMap;
  }

  public constructor() {}
}
