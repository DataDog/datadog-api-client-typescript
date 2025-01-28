/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ActionMute } from "./ActionMute";
import { AutomationRule } from "./AutomationRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the mute rule patch request: the rule name, the rule details, the associated action, and the enabled field.
 */
export class PatchMuteRuleParametersDataAttributes {
  /**
   * Action of the mute rule
   */
  "action"?: ActionMute;
  /**
   * Field used to enable or disable the rule.
   */
  "enabled"?: boolean;
  /**
   * Name of the pipeline rule
   */
  "name"?: string;
  /**
   * The definition of an automation pipeline rule scope.
   * A rule can act on specific issue types, security rule types, security rule IDs, rule severities, or a query.
   * The query can be used to filter resources on tags and attributes.
   * The issue type and rule types fields are required.
   */
  "rule"?: AutomationRule;

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
      type: "ActionMute",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    rule: {
      baseName: "rule",
      type: "AutomationRule",
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
    return PatchMuteRuleParametersDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
