/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExecutionPolicyActionPattern } from "./ExecutionPolicyActionPattern";
import { ExecutionPolicyEffect } from "./ExecutionPolicyEffect";
import { ExecutionPolicyScope } from "./ExecutionPolicyScope";
import { ExecutionPolicyTarget } from "./ExecutionPolicyTarget";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes used to create or update an execution policy.
 */
export class ExecutionPolicyWriteAttributes {
  /**
   * The set of actions this policy applies to.
   */
  "actionPattern": ExecutionPolicyActionPattern;
  /**
   * Whether the policy allows or denies matching actions.
   */
  "effect": ExecutionPolicyEffect;
  /**
   * The name of the execution policy.
   */
  "name": string;
  /**
   * Restricts where the policy applies. At most one of `kubernetes`, `scripts`,
   * or `remote_action_rshell` can be set. An empty object means the policy has
   * no scope restriction.
   */
  "scope"?: ExecutionPolicyScope;
  /**
   * The targets this policy applies to.
   */
  "targets"?: Array<ExecutionPolicyTarget>;

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
    actionPattern: {
      baseName: "action_pattern",
      type: "ExecutionPolicyActionPattern",
      required: true,
    },
    effect: {
      baseName: "effect",
      type: "ExecutionPolicyEffect",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    scope: {
      baseName: "scope",
      type: "ExecutionPolicyScope",
    },
    targets: {
      baseName: "targets",
      type: "Array<ExecutionPolicyTarget>",
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
    return ExecutionPolicyWriteAttributes.attributeTypeMap;
  }

  public constructor() {}
}
