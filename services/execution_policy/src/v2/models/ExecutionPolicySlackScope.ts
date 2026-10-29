import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionPolicySlackScopeRule } from "./ExecutionPolicySlackScopeRule";

/**
 * Restricts the policy to specific Slack private channel names.
 */
export class ExecutionPolicySlackScope {
  /**
   * The Slack scope rules.
   */
  "rules": Array<ExecutionPolicySlackScopeRule>;
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
    rules: {
      baseName: "rules",
      type: "Array<ExecutionPolicySlackScopeRule>",
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
    return ExecutionPolicySlackScope.attributeTypeMap;
  }

  public constructor() {}
}
