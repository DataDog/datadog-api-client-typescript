import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OverrideRelationshipsScheduleDataType } from "./OverrideRelationshipsScheduleDataType";

/**
 * A reference to the schedule the override belongs to, containing the schedule's ID and resource type.
 */
export class OverrideRelationshipsScheduleData {
  /**
   * The unique identifier of the schedule.
   */
  "id": string;
  /**
   * Indicates that the related resource is of type 'schedules'.
   */
  "type": OverrideRelationshipsScheduleDataType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OverrideRelationshipsScheduleDataType",
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
    return OverrideRelationshipsScheduleData.attributeTypeMap;
  }

  public constructor() {}
}
