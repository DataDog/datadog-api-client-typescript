/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentRuleActionCoreDump } from "./CloudWorkloadSecurityAgentRuleActionCoreDump";
import { CloudWorkloadSecurityAgentRuleActionHash } from "./CloudWorkloadSecurityAgentRuleActionHash";
import { CloudWorkloadSecurityAgentRuleActionLog } from "./CloudWorkloadSecurityAgentRuleActionLog";
import { CloudWorkloadSecurityAgentRuleActionMetadata } from "./CloudWorkloadSecurityAgentRuleActionMetadata";
import { CloudWorkloadSecurityAgentRuleActionNetworkFilter } from "./CloudWorkloadSecurityAgentRuleActionNetworkFilter";
import { CloudWorkloadSecurityAgentRuleActionSet } from "./CloudWorkloadSecurityAgentRuleActionSet";
import { CloudWorkloadSecurityAgentRuleKill } from "./CloudWorkloadSecurityAgentRuleKill";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The action the rule can perform if triggered
 */
export class CloudWorkloadSecurityAgentRuleAction {
  /**
   * The core dump action applied on the process matching the rule.
   */
  "coredump"?: CloudWorkloadSecurityAgentRuleActionCoreDump;
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
   * The log action applied when the rule is triggered.
   */
  "log"?: CloudWorkloadSecurityAgentRuleActionLog;
  /**
   * The metadata action applied on the scope matching the rule
   */
  "metadata"?: CloudWorkloadSecurityAgentRuleActionMetadata;
  /**
   * The network filter action applied on the network traffic matching the rule.
   */
  "networkFilter"?: CloudWorkloadSecurityAgentRuleActionNetworkFilter;
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
    coredump: {
      baseName: "coredump",
      type: "CloudWorkloadSecurityAgentRuleActionCoreDump",
    },
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
    log: {
      baseName: "log",
      type: "CloudWorkloadSecurityAgentRuleActionLog",
    },
    metadata: {
      baseName: "metadata",
      type: "CloudWorkloadSecurityAgentRuleActionMetadata",
    },
    networkFilter: {
      baseName: "network_filter",
      type: "CloudWorkloadSecurityAgentRuleActionNetworkFilter",
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
