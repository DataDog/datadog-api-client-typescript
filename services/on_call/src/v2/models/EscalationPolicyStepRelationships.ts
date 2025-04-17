import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationTarget } from "./EscalationTarget";

/**
 * Represents the relationship of an escalation policy step to its targets.
 */
export class EscalationPolicyStepRelationships {
  /**
   * Represents an escalation target, which can be a team, user, or schedule.
   */
  "targets"?: EscalationTarget;
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
    targets: {
      baseName: "targets",
      type: "EscalationTarget",
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
    return EscalationPolicyStepRelationships.attributeTypeMap;
  }

  public constructor() {}
}
