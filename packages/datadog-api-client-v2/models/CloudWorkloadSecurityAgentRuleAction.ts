/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentRuleActionHash } from "./CloudWorkloadSecurityAgentRuleActionHash";
import { CloudWorkloadSecurityAgentRuleActionMetadata } from "./CloudWorkloadSecurityAgentRuleActionMetadata";
import { CloudWorkloadSecurityAgentRuleActionSet } from "./CloudWorkloadSecurityAgentRuleActionSet";
import { CloudWorkloadSecurityAgentRuleKill } from "./CloudWorkloadSecurityAgentRuleKill";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The action the rule can perform if triggered
 */
export class CloudWorkloadSecurityAgentRuleAction {
  /**
   * Whether the action is disabled
   */
  "disabled"?: boolean;
  /**
   * SECL expression used to target the container to apply the action on
   */
  "filter"?: string;
  /**
   * Hash file specified by the field attribute
   */
  "hash"?: CloudWorkloadSecurityAgentRuleActionHash;
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
    disabled: {
      baseName: "disabled",
      type: "boolean",
    },
    filter: {
      baseName: "filter",
      type: "string",
    },
    hash: {
      baseName: "hash",
      type: "CloudWorkloadSecurityAgentRuleActionHash",
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
      type: "{ [key: string]: any; }",
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
