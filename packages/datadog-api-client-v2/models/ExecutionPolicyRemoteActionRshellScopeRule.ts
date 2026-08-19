/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExecutionPolicyRemoteActionRshellAccess } from "./ExecutionPolicyRemoteActionRshellAccess";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A rule restricting remote shell access to specific paths.
 */
export class ExecutionPolicyRemoteActionRshellScopeRule {
  /**
   * The level of remote shell access granted for the target paths.
   */
  "access": ExecutionPolicyRemoteActionRshellAccess;
  /**
   * The file system paths this rule applies to.
   */
  "targetPaths": Array<string>;

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
    access: {
      baseName: "access",
      type: "ExecutionPolicyRemoteActionRshellAccess",
      required: true,
    },
    targetPaths: {
      baseName: "target_paths",
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
    return ExecutionPolicyRemoteActionRshellScopeRule.attributeTypeMap;
  }

  public constructor() {}
}
