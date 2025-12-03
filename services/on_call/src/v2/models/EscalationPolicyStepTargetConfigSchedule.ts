import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleTargetPosition } from "./ScheduleTargetPosition";

/**
 * Schedule-specific configuration for an escalation target.
 */
export class EscalationPolicyStepTargetConfigSchedule {
  /**
   * Specifies the position of a schedule target (example `previous`, `current`, or `next`).
   */
  "position"?: ScheduleTargetPosition;
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
    position: {
      baseName: "position",
      type: "ScheduleTargetPosition",
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
    return EscalationPolicyStepTargetConfigSchedule.attributeTypeMap;
  }

  public constructor() {}
}
