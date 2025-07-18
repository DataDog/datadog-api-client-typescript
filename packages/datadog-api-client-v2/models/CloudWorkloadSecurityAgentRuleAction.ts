/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentRuleActionMetadata } from "./CloudWorkloadSecurityAgentRuleActionMetadata";
import { CloudWorkloadSecurityAgentRuleActionSet } from "./CloudWorkloadSecurityAgentRuleActionSet";
import { CloudWorkloadSecurityAgentRuleKill } from "./CloudWorkloadSecurityAgentRuleKill";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The action the rule can perform if triggered
 */
export class CloudWorkloadSecurityAgentRuleAction {
  /**
   * SECL expression used to target the container to apply the action on
   */
  "filter"?: string;
  /**
   * An empty object indicating the hash action
   */
  "hash"?: { [key: string]: any };
  /**
   * Kill system call applied on the container matching the rule
   */
  "kill"?: CloudWorkloadSecurityAgentRuleKill;
  /**
   * The metadata action applied on the scope matching the rule
   */
  "metadata"?: CloudWorkloadSecurityAgentRuleActionMetadata;
  /**
   * The set action applied on the scope matching the rule
   */
  "set"?: CloudWorkloadSecurityAgentRuleActionSet;

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
    filter: {
      baseName: "filter",
      type: "string",
    },
    hash: {
      baseName: "hash",
      type: "{ [key: string]: any; }",
    },
    kill: {
      baseName: "kill",
      type: "CloudWorkloadSecurityAgentRuleKill",
    },
    metadata: {
      baseName: "metadata",
      type: "CloudWorkloadSecurityAgentRuleActionMetadata",
    },
    set: {
      baseName: "set",
      type: "CloudWorkloadSecurityAgentRuleActionSet",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudWorkloadSecurityAgentRuleAction.attributeTypeMap;
  }

  public constructor() {}
}
