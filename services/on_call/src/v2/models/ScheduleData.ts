import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleDataAttributes } from "./ScheduleDataAttributes";
import { ScheduleDataRelationships } from "./ScheduleDataRelationships";
import { ScheduleDataType } from "./ScheduleDataType";

/**
 * Represents the primary data object for a schedule, linking attributes and relationships.
 */
export class ScheduleData {
  /**
   * Provides core properties of a schedule object such as its name and time zone.
   */
  "attributes"?: ScheduleDataAttributes;
  /**
   * The schedule's unique identifier.
   */
  "id"?: string;
  /**
   * Groups the relationships for a schedule object, referencing layers and teams.
   */
  "relationships"?: ScheduleDataRelationships;
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
    },
    relationships: {
      baseName: "relationships",
      type: "ScheduleDataRelationships",
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
    return ScheduleData.attributeTypeMap;
  }

  public constructor() {}
}
