import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionPolicyScriptScopeRule } from "./ExecutionPolicyScriptScopeRule";

/**
 * Restricts the policy to specific scripts.
 */
export class ExecutionPolicyScriptScope {
  /**
   * The script scope rules.
   */
  "rules": Array<ExecutionPolicyScriptScopeRule>;
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
      type: "Array<ExecutionPolicyScriptScopeRule>",
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
    return ExecutionPolicyScriptScope.attributeTypeMap;
  }

  public constructor() {}
}
