import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyStepAttributes } from "./EscalationPolicyStepAttributes";
import { EscalationPolicyStepRelationships } from "./EscalationPolicyStepRelationships";
import { EscalationPolicyStepType } from "./EscalationPolicyStepType";

/**
 * Represents a single step in an escalation policy, including its attributes, relationships, and resource type.
 */
export class EscalationPolicyStep {
  /**
   * Defines attributes for an escalation policy step, such as assignment strategy and escalation timeout.
   */
  "attributes"?: EscalationPolicyStepAttributes;
  /**
   * Specifies the unique identifier of this escalation policy step.
   */
  "id"?: string;
  /**
   * Represents the relationship of an escalation policy step to its targets.
   */
  "relationships"?: EscalationPolicyStepRelationships;
  /**
   * Indicates that the resource is of type `steps`.
   */
  "type": EscalationPolicyStepType;
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
    attributes: {
      baseName: "attributes",
      type: "EscalationPolicyStepAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "EscalationPolicyStepRelationships",
    },
    type: {
      baseName: "type",
      type: "EscalationPolicyStepType",
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
    return EscalationPolicyStep.attributeTypeMap;
  }

  public constructor() {}
}
