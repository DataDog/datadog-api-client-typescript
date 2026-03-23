import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An argument parameter for a static analysis rule, with a name and description.
 */
export class GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems {
  /**
   * A human-readable explanation of the argument's purpose and accepted values.
   */
  "description"?: string;
  /**
   * The name of the rule argument.
   */
  "name"?: string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems.attributeTypeMap;
  }

  public constructor() {}
}
