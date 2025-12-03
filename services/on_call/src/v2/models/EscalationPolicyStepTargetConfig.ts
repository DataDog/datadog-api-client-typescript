import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyStepTargetConfigSchedule } from "./EscalationPolicyStepTargetConfigSchedule";

/**
 * Configuration for an escalation target, such as schedule position.
 */
export class EscalationPolicyStepTargetConfig {
  /**
   * Schedule-specific configuration for an escalation target.
   */
  "schedule"?: EscalationPolicyStepTargetConfigSchedule;
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
    schedule: {
      baseName: "schedule",
      type: "EscalationPolicyStepTargetConfigSchedule",
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
    return EscalationPolicyStepTargetConfig.attributeTypeMap;
  }

  public constructor() {}
}
