import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleUpdateRequestDataAttributesLayersItems } from "./ScheduleUpdateRequestDataAttributesLayersItems";

/**
 * Defines the updatable attributes for a schedule, such as name, time zone, tags, and layers.
 */
export class ScheduleUpdateRequestDataAttributes {
  /**
   * The updated list of layers (rotations) for this schedule.
   */
  "layers": Array<ScheduleUpdateRequestDataAttributesLayersItems>;
  /**
   * A short name for the schedule.
   */
  "name": string;
  /**
   * A list of tags that you can associate with this schedule.
   */
  "tags"?: Array<string>;
  /**
   * The time zone used when interpreting rotation times.
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
      type: "Array<ScheduleUpdateRequestDataAttributesLayersItems>",
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
    return ScheduleUpdateRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
