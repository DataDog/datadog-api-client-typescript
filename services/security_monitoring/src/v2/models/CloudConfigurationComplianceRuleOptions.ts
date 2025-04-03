import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudConfigurationRegoRule } from "./CloudConfigurationRegoRule";

/**
 * Options for cloud_configuration rules.
 * Fields `resourceType` and `regoRule` are mandatory when managing custom `cloud_configuration` rules.
 */
export class CloudConfigurationComplianceRuleOptions {
  /**
   * Whether the rule is a complex one.
   * Must be set to true if `regoRule.resourceTypes` contains more than one item. Defaults to false.
   */
  "complexRule"?: boolean;
  /**
   * Rule details.
   */
  "regoRule"?: CloudConfigurationRegoRule;
  /**
   * Main resource type to be checked by the rule. It should be specified again in `regoRule.resourceTypes`.
   */
  "resourceType"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: { [key: string]: any; } };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    complexRule: {
      baseName: "complexRule",
      type: "boolean",
    },
    regoRule: {
      baseName: "regoRule",
      type: "CloudConfigurationRegoRule",
    },
    resourceType: {
      baseName: "resourceType",
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
    return CloudConfigurationComplianceRuleOptions.attributeTypeMap;
  }

  public constructor() {}
}
