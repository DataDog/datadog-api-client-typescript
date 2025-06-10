/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleData } from "./ScheduleData";
import { ScheduleDataIncludedItem } from "./ScheduleDataIncludedItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with a list of on-call schedules.
 */
export class SchedulesResponse {
  /**
   * A list of on-call schedules.
   */
  "data"?: Array<ScheduleData>;
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
      type: "Array<ScheduleData>",
    },
    included: {
      baseName: "included",
      type: "Array<ScheduleDataIncludedItem>",
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
    return SchedulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
