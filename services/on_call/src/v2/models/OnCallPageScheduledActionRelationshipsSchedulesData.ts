import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleDataType } from "./ScheduleDataType";

/**
 * Reference to a schedule.
 */
export class OnCallPageScheduledActionRelationshipsSchedulesData {
  /**
   * The schedule ID.
   */
  "id": string;
  /**
   * Schedules resource type.
   */
  "type": ScheduleDataType;
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
      type: "ScheduleDataType",
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
    return OnCallPageScheduledActionRelationshipsSchedulesData.attributeTypeMap;
  }

  public constructor() {}
}
