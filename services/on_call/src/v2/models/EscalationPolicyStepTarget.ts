import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyStepTargetConfig } from "./EscalationPolicyStepTargetConfig";
import { EscalationPolicyStepTargetType } from "./EscalationPolicyStepTargetType";

/**
 * Defines a single escalation target within a step for an escalation policy creation request. Contains `id`, `type`, and optional `config`.
 */
export class EscalationPolicyStepTarget {
  /**
   * Configuration for an escalation target, such as schedule position.
   */
  "config"?: EscalationPolicyStepTargetConfig;
  /**
   * Specifies the unique identifier for this target.
   */
  "id"?: string;
  /**
   * Specifies the type of escalation target (example `users`, `schedules`, or `teams`).
   */
  "type"?: EscalationPolicyStepTargetType;
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
    config: {
      baseName: "config",
      type: "EscalationPolicyStepTargetConfig",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "EscalationPolicyStepTargetType",
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
    return EscalationPolicyStepTarget.attributeTypeMap;
  }

  public constructor() {}
}
