import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Result of the test of the rule queries.
 */
export class SecurityMonitoringRuleTestResponse {
  /**
   * Assert results are returned in the same order as the rule query payloads.
   * For each payload, it returns True if the result matched the expected result,
   * False otherwise.
   */
  "results"?: Array<boolean>;
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
    results: {
      baseName: "results",
      type: "Array<boolean>",
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
    return SecurityMonitoringRuleTestResponse.attributeTypeMap;
  }

  public constructor() {}
}
