import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionPolicyKubernetesScope } from "./ExecutionPolicyKubernetesScope";
import { ExecutionPolicyRemoteActionRshellScope } from "./ExecutionPolicyRemoteActionRshellScope";
import { ExecutionPolicyScriptScope } from "./ExecutionPolicyScriptScope";

/**
 * Restricts where the policy applies. At most one of `kubernetes`, `scripts`,
 * or `remote_action_rshell` can be set. An empty object means the policy has
 * no scope restriction.
 */
export class ExecutionPolicyScope {
  /**
   * Restricts the policy to specific Kubernetes namespaces.
   */
  "kubernetes"?: ExecutionPolicyKubernetesScope;
  /**
   * Restricts the policy to specific remote shell paths.
   */
  "remoteActionRshell"?: ExecutionPolicyRemoteActionRshellScope;
  /**
   * Restricts the policy to specific scripts.
   */
  "scripts"?: ExecutionPolicyScriptScope;
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
    kubernetes: {
      baseName: "kubernetes",
      type: "ExecutionPolicyKubernetesScope",
    },
    remoteActionRshell: {
      baseName: "remote_action_rshell",
      type: "ExecutionPolicyRemoteActionRshellScope",
    },
    scripts: {
      baseName: "scripts",
      type: "ExecutionPolicyScriptScope",
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
    return ExecutionPolicyScope.attributeTypeMap;
  }

  public constructor() {}
}
