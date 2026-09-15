/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Kill system call applied on the container matching the rule
 */
export class CloudWorkloadSecurityAgentRuleKill {
  /**
   * Whether the automatic container safeguard of the kill action is disabled.
   */
  "disableContainerDisarmer"?: boolean;
  /**
   * Whether the automatic executable safeguard of the kill action is disabled.
   */
  "disableExecutableDisarmer"?: boolean;
  /**
   * The scope of the kill action.
   */
  "scope"?: string;
  /**
   * Supported signals for the kill system call
   */
  "signal"?: string;

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
    disableContainerDisarmer: {
      baseName: "disable_container_disarmer",
      type: "boolean",
    },
    disableExecutableDisarmer: {
      baseName: "disable_executable_disarmer",
      type: "boolean",
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
    signal: {
      baseName: "signal",
      type: "string",
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
    return CloudWorkloadSecurityAgentRuleKill.attributeTypeMap;
  }

  public constructor() {}
}
