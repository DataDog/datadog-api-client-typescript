/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExecutionPolicyIntegration } from "./ExecutionPolicyIntegration";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The set of actions this policy applies to.
 */
export class ExecutionPolicyActionPattern {
  /**
   * The fully qualified action names this policy matches. Use `*` to match all actions
   * of the integration, or a fully qualified name prefixed with the integration's action
   * namespace (for example `com.datadoghq.script.*` for the Script integration).
   */
  "actionFqns": Array<string>;
  /**
   * The integration the action pattern applies to.
   */
  "integration": ExecutionPolicyIntegration;

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
    actionFqns: {
      baseName: "action_fqns",
      type: "Array<string>",
      required: true,
    },
    integration: {
      baseName: "integration",
      type: "ExecutionPolicyIntegration",
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
    return ExecutionPolicyActionPattern.attributeTypeMap;
  }

  public constructor() {}
}
