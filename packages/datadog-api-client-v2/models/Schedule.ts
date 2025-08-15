/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleData } from "./ScheduleData";
import { ScheduleDataIncludedItem } from "./ScheduleDataIncludedItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
