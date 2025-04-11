import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleCreateRequestDataAttributesLayersItems } from "./ScheduleCreateRequestDataAttributesLayersItems";

/**
 * Describes the main attributes for creating a new schedule, including name, layers, time zone, and tags.
 */
export class ScheduleCreateRequestDataAttributes {
  /**
   * The layers of on-call coverage that define rotation intervals and restrictions.
   */
  "layers": Array<ScheduleCreateRequestDataAttributesLayersItems>;
  /**
   * A human-readable name for the new schedule.
   */
  "name": string;
  /**
   * A list of tags for categorizing or filtering the schedule.
   */
  "tags"?: Array<string>;
  /**
   * The time zone in which the schedule is defined.
   */
  "timeZone": string;
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
    layers: {
      baseName: "layers",
      type: "Array<ScheduleCreateRequestDataAttributesLayersItems>",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    timeZone: {
      baseName: "time_zone",
      type: "string",
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
    return ScheduleCreateRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
