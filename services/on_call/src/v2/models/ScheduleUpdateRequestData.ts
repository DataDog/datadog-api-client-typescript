import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleUpdateRequestDataAttributes } from "./ScheduleUpdateRequestDataAttributes";
import { ScheduleUpdateRequestDataRelationships } from "./ScheduleUpdateRequestDataRelationships";
import { ScheduleUpdateRequestDataType } from "./ScheduleUpdateRequestDataType";

/**
 * Contains all data needed to update an existing schedule, including its attributes (such as name and time zone) and any relationships to teams.
 */
export class ScheduleUpdateRequestData {
  /**
   * Defines the updatable attributes for a schedule, such as name, time zone, and layers.
   */
  "attributes": ScheduleUpdateRequestDataAttributes;
  /**
   * The ID of the schedule to be updated.
   */
  "id": string;
  /**
   * Houses relationships for the schedule update, typically referencing teams.
   */
  "relationships"?: ScheduleUpdateRequestDataRelationships;
  /**
   * Schedules resource type.
   */
  "type": ScheduleUpdateRequestDataType;
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
      type: "ScheduleUpdateRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "ScheduleUpdateRequestDataRelationships",
    },
    type: {
      baseName: "type",
      type: "ScheduleUpdateRequestDataType",
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
    return ScheduleUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
