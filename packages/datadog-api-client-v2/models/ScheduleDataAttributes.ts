/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Provides core properties of a schedule object such as its name and time zone.
 */
export class ScheduleDataAttributes {
  /**
   * Maximum number of users who can be on call at the same time.
   * The value is between 1 and the number of layers, and no greater than 10.
   */
  "maxResponders"?: number;
  /**
   * A short name for the schedule.
   */
  "name"?: string;
  /**
   * A list of tags associated with the schedule.
   */
  "tags"?: Array<string>;
  /**
   * The time zone in which this schedule operates.
   */
  "timeZone"?: string;

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
    maxResponders: {
      baseName: "max_responders",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    timeZone: {
      baseName: "time_zone",
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
    return ScheduleDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
