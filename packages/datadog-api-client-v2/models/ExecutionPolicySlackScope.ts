/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExecutionPolicySlackScopeRule } from "./ExecutionPolicySlackScopeRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Restricts the policy to specific Slack private channel names.
 */
export class ExecutionPolicySlackScope {
  /**
   * The Slack scope rules.
   */
  "rules": Array<ExecutionPolicySlackScopeRule>;

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
      type: "Array<ExecutionPolicySlackScopeRule>",
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
    return ExecutionPolicySlackScope.attributeTypeMap;
  }

  public constructor() {}
}
