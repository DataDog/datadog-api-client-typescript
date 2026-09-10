import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleDataAttributes } from "./ScheduleDataAttributes";
import { ScheduleDataType } from "./ScheduleDataType";
import { ScheduleListItemRelationships } from "./ScheduleListItemRelationships";

/**
 * Represents a summary of a schedule, linking its core attributes and team relationships.
 */
export class ScheduleListItem {
  /**
   * Provides core properties of a schedule object such as its name and time zone.
   */
  "attributes"?: ScheduleDataAttributes;
  /**
   * The schedule's unique identifier.
   */
  "id": string;
  /**
   * Groups the relationships for a schedule summary, referencing its teams.
   */
  "relationships"?: ScheduleListItemRelationships;
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
    attributes: {
      baseName: "attributes",
      type: "ScheduleDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "ScheduleListItemRelationships",
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
    return ScheduleListItem.attributeTypeMap;
  }

  public constructor() {}
}
