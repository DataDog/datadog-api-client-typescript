import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `RulesetRespDataAttributesRulesItemsMapping` object.
 */
export class RulesetRespDataAttributesRulesItemsMapping {
  /**
   * The `mapping` `destination_key`.
   */
  "destinationKey": string;
  /**
   * The `mapping` `if_not_exists`.
   */
  "ifNotExists": boolean;
  /**
   * The `mapping` `source_keys`.
   */
  "sourceKeys": Array<string>;
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
    destinationKey: {
      baseName: "destination_key",
      type: "string",
      required: true,
    },
    ifNotExists: {
      baseName: "if_not_exists",
      type: "boolean",
      required: true,
    },
    sourceKeys: {
      baseName: "source_keys",
      type: "Array<string>",
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
    return RulesetRespDataAttributesRulesItemsMapping.attributeTypeMap;
  }

  public constructor() {}
}
