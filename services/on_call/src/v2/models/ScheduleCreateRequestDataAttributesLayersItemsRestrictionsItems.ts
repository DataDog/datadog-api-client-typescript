import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItemsEndDay } from "./ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItemsEndDay";
import { ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItemsStartDay } from "./ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItemsStartDay";

/**
 * Defines a time restriction for a schedule layer, including which day of the week
 * it starts and ends, along with start/end times.
 */
export class ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItems {
  /**
   * The weekday when the restriction period ends (Monday through Sunday).
   */
  "endDay"?: ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItemsEndDay;
  /**
   * The time of day when the restriction ends (hh:mm:ss).
   */
  "endTime"?: string;
  /**
   * The weekday when the restriction period starts (Monday through Sunday).
   */
  "startDay"?: ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItemsStartDay;
  /**
   * The time of day when the restriction begins (hh:mm:ss).
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
      type: "ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItemsEndDay",
    },
    endTime: {
      baseName: "end_time",
      type: "string",
    },
    startDay: {
      baseName: "start_day",
      type: "ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItemsStartDay",
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
    return ScheduleCreateRequestDataAttributesLayersItemsRestrictionsItems.attributeTypeMap;
  }

  public constructor() {}
}
