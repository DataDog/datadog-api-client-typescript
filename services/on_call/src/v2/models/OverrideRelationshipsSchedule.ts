import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OverrideRelationshipsScheduleData } from "./OverrideRelationshipsScheduleData";

/**
 * Defines the relationship between an override and the schedule it belongs to.
 */
export class OverrideRelationshipsSchedule {
  /**
   * A reference to the schedule the override belongs to, containing the schedule's ID and resource type.
   */
  "data": OverrideRelationshipsScheduleData;
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
      type: "OverrideRelationshipsScheduleData",
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
    return OverrideRelationshipsSchedule.attributeTypeMap;
  }

  public constructor() {}
}
