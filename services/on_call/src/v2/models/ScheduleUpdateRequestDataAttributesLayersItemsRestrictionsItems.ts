import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItemsEndDay } from "./ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItemsEndDay";
import { ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItemsStartDay } from "./ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItemsStartDay";

/**
 * Defines a time restriction object for a layer within a schedule update, including
 * start and end days, as well as times.
 */
export class ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItems {
  /**
   * Defines the day of the week on which the time restriction ends.
   */
  "endDay"?: ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItemsEndDay;
  /**
   * The time at which this restriction ends (hh:mm:ss).
   */
  "endTime"?: string;
  /**
   * Defines the day of the week on which the time restriction starts.
   */
  "startDay"?: ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItemsStartDay;
  /**
   * The time at which this restriction starts (hh:mm:ss).
   */
  "startTime"?: string;
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
    endDay: {
      baseName: "end_day",
      type: "ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItemsEndDay",
    },
    endTime: {
      baseName: "end_time",
      type: "string",
    },
    startDay: {
      baseName: "start_day",
      type: "ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItemsStartDay",
    },
    startTime: {
      baseName: "start_time",
      type: "string",
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
    return ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItems.attributeTypeMap;
  }

  public constructor() {}
}
