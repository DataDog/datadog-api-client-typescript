import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfiguredScheduleTargetRelationshipsSchedule } from "./ConfiguredScheduleTargetRelationshipsSchedule";

/**
 * Represents the relationships of a configured schedule target.
 */
export class ConfiguredScheduleTargetRelationships {
  /**
   * Holds the schedule reference for a configured schedule target.
   */
  "schedule": ConfiguredScheduleTargetRelationshipsSchedule;
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
      type: "ConfiguredScheduleTargetRelationshipsSchedule",
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
    return ConfiguredScheduleTargetRelationships.attributeTypeMap;
  }

  public constructor() {}
}
