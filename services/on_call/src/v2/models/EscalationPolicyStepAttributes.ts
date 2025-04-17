import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyStepAttributesAssignment } from "./EscalationPolicyStepAttributesAssignment";

/**
 * Defines attributes for an escalation policy step, such as assignment strategy and escalation timeout.
 */
export class EscalationPolicyStepAttributes {
  /**
   * Specifies how this escalation step will assign targets (example `default` or `round-robin`).
   */
  "assignment"?: EscalationPolicyStepAttributesAssignment;
  /**
   * Specifies how many seconds to wait before escalating to the next step.
   */
  "escalateAfterSeconds"?: number;
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
    assignment: {
      baseName: "assignment",
      type: "EscalationPolicyStepAttributesAssignment",
    },
    escalateAfterSeconds: {
      baseName: "escalate_after_seconds",
      type: "number",
      format: "int64",
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
    return EscalationPolicyStepAttributes.attributeTypeMap;
  }

  public constructor() {}
}
