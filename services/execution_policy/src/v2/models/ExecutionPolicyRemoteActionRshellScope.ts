import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionPolicyRemoteActionRshellScopeRule } from "./ExecutionPolicyRemoteActionRshellScopeRule";

/**
 * Restricts the policy to specific remote shell paths.
 */
export class ExecutionPolicyRemoteActionRshellScope {
  /**
   * The remote shell scope rules.
   */
  "rules": Array<ExecutionPolicyRemoteActionRshellScopeRule>;
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
      type: "Array<ExecutionPolicyRemoteActionRshellScopeRule>",
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
    return ExecutionPolicyRemoteActionRshellScope.attributeTypeMap;
  }

  public constructor() {}
}
