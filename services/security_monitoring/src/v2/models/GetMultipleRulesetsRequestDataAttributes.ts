import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The request attributes for fetching multiple rulesets, specifying which rulesets to retrieve and what data to include.
 */
export class GetMultipleRulesetsRequestDataAttributes {
  /**
   * When true, rules that are available in testing mode are included in the response.
   */
  "includeTestingRules"?: boolean;
  /**
   * When true, test cases associated with each rule are included in the response.
   */
  "includeTests"?: boolean;
  /**
   * The list of ruleset names to retrieve.
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
