import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AutomationRuleCreatedBy } from "./AutomationRuleCreatedBy";
import { AutomationRuleModifiedBy } from "./AutomationRuleModifiedBy";
import { AutomationRuleScope } from "./AutomationRuleScope";
import { TicketCreationRuleActionResponse } from "./TicketCreationRuleActionResponse";

/**
 * Attributes of a ticket creation rule returned by the API.
 */
export class TicketCreationRuleAttributesResponse {
  /**
   * The action to take when the ticket creation rule matches a finding.
   */
  "action": TicketCreationRuleActionResponse;
  /**
   * The Unix timestamp in milliseconds when the rule was created.
   */
  "createdAt": number;
  /**
   * The user or Datadog system who created the rule.
   */
  "createdBy": AutomationRuleCreatedBy;
  /**
   * Whether the ticket creation rule is enabled.
   */
  "enabled": boolean;
  /**
   * The Unix timestamp in milliseconds when the rule was last modified.
   */
  "modifiedAt": number;
  /**
   * The user or Datadog system who last modified the rule.
   */
  "modifiedBy": AutomationRuleModifiedBy;
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
  "additionalProperties"?: { [key: string]: any; };
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
      type: "TicketCreationRuleActionResponse",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "number",
      required: true,
      format: "int64",
    },
    createdBy: {
      baseName: "created_by",
      type: "AutomationRuleCreatedBy",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "number",
      required: true,
      format: "int64",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "AutomationRuleModifiedBy",
      required: true,
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
    return TicketCreationRuleAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
