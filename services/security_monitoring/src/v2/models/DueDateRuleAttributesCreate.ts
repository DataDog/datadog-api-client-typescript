import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AutomationRuleScope } from "./AutomationRuleScope";
import { DueDateRuleAction } from "./DueDateRuleAction";

/**
 * Attributes for creating or updating a due date rule.
 */
export class DueDateRuleAttributesCreate {
  /**
   * The action to take when the due date rule matches a finding.
   */
  "action": DueDateRuleAction;
  /**
   * Whether the due date rule is enabled.
   */
  "enabled"?: boolean;
  /**
   * The name of the due date rule.
   */
  "name": string;
  /**
   * Defines the scope of findings to which the automation rule applies.
   */
  "rule": AutomationRuleScope;
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
      type: "DueDateRuleAction",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    rule: {
      baseName: "rule",
      type: "AutomationRuleScope",
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
    return DueDateRuleAttributesCreate.attributeTypeMap;
  }

  public constructor() {}
}
