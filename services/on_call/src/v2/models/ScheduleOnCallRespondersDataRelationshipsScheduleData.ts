import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleOnCallRespondersDataRelationshipsScheduleDataType } from "./ScheduleOnCallRespondersDataRelationshipsScheduleDataType";

/**
 * Represents a reference to the schedule this on-call responders lookup was performed for.
 */
export class ScheduleOnCallRespondersDataRelationshipsScheduleData {
  /**
   * Unique identifier of the schedule.
   */
  "id": string;
  /**
   * Identifies the resource type for the schedule associated with this on-call responders lookup.
   */
  "type": ScheduleOnCallRespondersDataRelationshipsScheduleDataType;
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
      type: "ScheduleOnCallRespondersDataRelationshipsScheduleDataType",
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
    return ScheduleOnCallRespondersDataRelationshipsScheduleData.attributeTypeMap;
  }

  public constructor() {}
}
