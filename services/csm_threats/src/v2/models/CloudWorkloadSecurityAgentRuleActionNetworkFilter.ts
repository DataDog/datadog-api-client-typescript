import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The network filter action applied on the network traffic matching the rule.
 */
export class CloudWorkloadSecurityAgentRuleActionNetworkFilter {
  /**
   * The filter expression of the network filter action.
   */
  "filter"?: string;
  /**
   * The policy of the network filter action.
   */
  "policy"?: string;
  /**
   * The scope of the network filter action.
   */
  "scope"?: string;
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
    filter: {
      baseName: "filter",
      type: "string",
    },
    policy: {
      baseName: "policy",
      type: "string",
    },
    scope: {
      baseName: "scope",
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
    return CloudWorkloadSecurityAgentRuleActionNetworkFilter.attributeTypeMap;
  }

  public constructor() {}
}
