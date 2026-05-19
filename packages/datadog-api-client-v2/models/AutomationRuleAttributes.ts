/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AutomationRuleAction } from "./AutomationRuleAction";
import { AutomationRuleTrigger } from "./AutomationRuleTrigger";
import { CaseAutomationRuleState } from "./CaseAutomationRuleState";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Core attributes of an automation rule, including its name, trigger condition, action to execute, and current state.
 */
export class AutomationRuleAttributes {
  /**
   * Defines what happens when the rule triggers. Combines an action type with action-specific configuration data.
   */
  "action": AutomationRuleAction;
  /**
   * Timestamp when the automation rule was created.
   */
  "createdAt": Date;
  /**
   * Timestamp when the automation rule was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * A human-readable name for the automation rule, used to identify the rule in the UI and API responses.
   */
  "name": string;
  /**
   * Whether the automation rule is active. Enabled rules trigger on matching case events; disabled rules are inactive but preserve their configuration.
   */
  "state": CaseAutomationRuleState;
  /**
   * Defines when the rule activates. Combines a trigger type (the case event to listen for) with optional trigger data (conditions that narrow when the trigger fires).
   */
  "trigger": AutomationRuleTrigger;

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
    action: {
      baseName: "action",
      type: "AutomationRuleAction",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    state: {
      baseName: "state",
      type: "CaseAutomationRuleState",
      required: true,
    },
    trigger: {
      baseName: "trigger",
      type: "AutomationRuleTrigger",
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
    return AutomationRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
