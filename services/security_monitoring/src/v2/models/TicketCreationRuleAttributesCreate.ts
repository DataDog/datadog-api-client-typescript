import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AutomationRuleScope } from "./AutomationRuleScope";
import { TicketCreationRuleAction } from "./TicketCreationRuleAction";

/**
 * Attributes for creating or updating a ticket creation rule.
 */
export class TicketCreationRuleAttributesCreate {
  /**
   * The action to take when the ticket creation rule matches a finding.
   */
  "action": TicketCreationRuleAction;
  /**
   * Whether the ticket creation rule is enabled.
   */
  "enabled"?: boolean;
  /**
   * The name of the ticket creation rule.
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
      type: "TicketCreationRuleAction",
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
    return TicketCreationRuleAttributesCreate.attributeTypeMap;
  }

  public constructor() {}
}
