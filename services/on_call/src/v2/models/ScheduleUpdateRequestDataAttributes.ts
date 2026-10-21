import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleUpdateRequestDataAttributesLayersItems } from "./ScheduleUpdateRequestDataAttributesLayersItems";

/**
 * Defines the updatable attributes for a schedule, such as name, time zone, and layers.
 */
export class ScheduleUpdateRequestDataAttributes {
  /**
   * The updated list of layers (rotations) for this schedule.
   */
  "layers": Array<ScheduleUpdateRequestDataAttributesLayersItems>;
  /**
   * Maximum number of users who can be on call at the same time.
   * The value must be between 1 and the number of layers, and no greater than 10.
   */
  "maxResponders"?: number;
  /**
   * A short name for the schedule.
   */
  "name": string;
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
    maxResponders: {
      baseName: "max_responders",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
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
