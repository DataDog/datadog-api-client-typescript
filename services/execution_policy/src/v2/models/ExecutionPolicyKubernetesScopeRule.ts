import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A rule restricting a Kubernetes scope to specific namespaces.
 */
export class ExecutionPolicyKubernetesScopeRule {
  /**
   * The Kubernetes namespaces this rule applies to.
   */
  "targetNamespaces": Array<string>;
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
    targetNamespaces: {
      baseName: "target_namespaces",
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
    return ExecutionPolicyKubernetesScopeRule.attributeTypeMap;
  }

  public constructor() {}
}
