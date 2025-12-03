import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleTarget } from "./ScheduleTarget";

/**
 * Holds the schedule reference for a configured schedule target.
 */
export class ConfiguredScheduleTargetRelationshipsSchedule {
  /**
   * Represents a schedule target for an escalation policy step, including its ID and resource type. This is a shortcut for a configured schedule target with position set to 'current'.
   */
  "data": ScheduleTarget;
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
    data: {
      baseName: "data",
      type: "ScheduleTarget",
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
    return ConfiguredScheduleTargetRelationshipsSchedule.attributeTypeMap;
  }

  public constructor() {}
}
