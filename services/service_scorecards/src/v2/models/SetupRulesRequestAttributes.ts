import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for setting up rules.
 */
export class SetupRulesRequestAttributes {
  /**
   * Array of default rule IDs to disable.
   */
  "disabledDefaultRules"?: Array<string>;
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
    disabledDefaultRules: {
      baseName: "disabled_default_rules",
      type: "Array<string>",
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
    return SetupRulesRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
