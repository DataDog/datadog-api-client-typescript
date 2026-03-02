import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyActionType } from "./EscalationPolicyActionType";
import { TimeRestrictions } from "./TimeRestrictions";
import { Urgency } from "./Urgency";

/**
 * Triggers an escalation policy when the routing rule matches.
 */
export class EscalationPolicyAction {
  /**
   * The ID of the escalation policy to trigger.
   */
  "policyId": string;
  /**
   * Holds time zone information and a list of time restrictions for a routing rule.
   */
  "supportHours"?: TimeRestrictions;
  /**
   * Indicates that the action is an escalation policy action.
   */
  "type": EscalationPolicyActionType;
  /**
   * Specifies the level of urgency for a routing rule (low, high, or dynamic).
   */
  "urgency"?: Urgency;
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
    policyId: {
      baseName: "policy_id",
      type: "string",
      required: true,
    },
    supportHours: {
      baseName: "support_hours",
      type: "TimeRestrictions",
    },
    type: {
      baseName: "type",
      type: "EscalationPolicyActionType",
      required: true,
    },
    urgency: {
      baseName: "urgency",
      type: "Urgency",
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
    return EscalationPolicyAction.attributeTypeMap;
  }

  public constructor() {}
}
