import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionPolicyActionPattern } from "./ExecutionPolicyActionPattern";
import { ExecutionPolicyEffect } from "./ExecutionPolicyEffect";
import { ExecutionPolicyScope } from "./ExecutionPolicyScope";
import { ExecutionPolicyTarget } from "./ExecutionPolicyTarget";

/**
 * An execution policy.
 */
export class ExecutionPolicyAttributes {
  /**
   * The set of actions this policy applies to.
   */
  "actionPattern": ExecutionPolicyActionPattern;
  /**
   * The date and time the execution policy was created.
   */
  "createdAt": Date;
  /**
   * The ID of the user who created the execution policy.
   */
  "createdBy": string;
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
  "targets": Array<ExecutionPolicyTarget>;
  /**
   * The date and time the execution policy was last updated.
   */
  "updatedAt": Date;
  /**
   * The ID of the user who last updated the execution policy.
   */
  "updatedBy": string;
  /**
   * The version of the execution policy. Incremented on every update.
   */
  "version": number;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
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
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    updatedBy: {
      baseName: "updated_by",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int32",
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
    return ExecutionPolicyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
