import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationTargets } from "./EscalationTargets";

/**
 * Represents the relationship of an escalation policy step to its targets.
 */
export class EscalationPolicyStepRelationships {
  /**
   * A list of escalation targets for a step
   */
  "targets"?: EscalationTargets;
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
      type: "EscalationTargets",
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
