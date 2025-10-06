import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `GetMultipleRulesetsRequestDataAttributes` object.
 */
export class GetMultipleRulesetsRequestDataAttributes {
  /**
   * The `attributes` `include_testing_rules`.
   */
  "includeTestingRules"?: boolean;
  /**
   * The `attributes` `include_tests`.
   */
  "includeTests"?: boolean;
  /**
   * The `attributes` `rulesets`.
   */
  "rulesets"?: Array<string>;
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
    includeTestingRules: {
      baseName: "include_testing_rules",
      type: "boolean",
    },
    includeTests: {
      baseName: "include_tests",
      type: "boolean",
    },
    rulesets: {
      baseName: "rulesets",
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
    return GetMultipleRulesetsRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
