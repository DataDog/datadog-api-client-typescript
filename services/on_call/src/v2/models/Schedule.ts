import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleData } from "./ScheduleData";
import { ScheduleDataIncludedItem } from "./ScheduleDataIncludedItem";

/**
 * Top-level container for a schedule object, including both the `data` payload and any related `included` resources (such as teams, layers, or members).
 */
export class Schedule {
  /**
   * Represents the primary data object for a schedule, linking attributes and relationships.
   */
  "data"?: ScheduleData;
  /**
   * Any additional resources related to this schedule, such as teams and layers.
   */
  "included"?: Array<ScheduleDataIncludedItem>;
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
      type: "ScheduleData",
    },
    included: {
      baseName: "included",
      type: "Array<ScheduleDataIncludedItem>",
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
    return Schedule.attributeTypeMap;
  }

  public constructor() {}
}
