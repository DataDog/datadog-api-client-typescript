import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A rule restricting a script scope to specific script names.
 */
export class ExecutionPolicyScriptScopeRule {
  /**
   * The script names this rule applies to.
   */
  "targetScriptNames": Array<string>;
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
    targetScriptNames: {
      baseName: "target_script_names",
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
    return ExecutionPolicyScriptScopeRule.attributeTypeMap;
  }

  public constructor() {}
}
