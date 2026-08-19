/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExecutionPolicyScriptScopeRule } from "./ExecutionPolicyScriptScopeRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
