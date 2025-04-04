/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItemsEndDay } from "./ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItemsEndDay";
import { ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItemsStartDay } from "./ScheduleUpdateRequestDataAttributesLayersItemsRestrictionsItemsStartDay";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "any",
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
