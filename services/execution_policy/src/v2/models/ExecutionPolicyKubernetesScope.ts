import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionPolicyKubernetesScopeRule } from "./ExecutionPolicyKubernetesScopeRule";

/**
 * Restricts the policy to specific Kubernetes namespaces.
 */
export class ExecutionPolicyKubernetesScope {
  /**
   * The Kubernetes scope rules.
   */
  "rules": Array<ExecutionPolicyKubernetesScopeRule>;
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
      type: "Array<ExecutionPolicyKubernetesScopeRule>",
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
    return ExecutionPolicyKubernetesScope.attributeTypeMap;
  }

  public constructor() {}
}
