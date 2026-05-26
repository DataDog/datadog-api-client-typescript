import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes of the default rulesets per language response, containing the list of default ruleset names.
 */
export class DefaultRulesetsPerLanguageDataAttributes {
  /**
   * The list of default ruleset names for the specified programming language.
   */
  "rulesets": Array<string>;
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
    rulesets: {
      baseName: "rulesets",
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
    return DefaultRulesetsPerLanguageDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
