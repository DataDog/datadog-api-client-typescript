/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleListItem } from "./ScheduleListItem";
import { SchedulesResponseMeta } from "./SchedulesResponseMeta";
import { TeamReference } from "./TeamReference";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A list of schedules with pagination metadata and any related included resources (such as teams).
 */
export class Schedules {
  /**
   * A list of schedules.
   */
  "data"?: Array<ScheduleListItem>;
  /**
   * Any additional resources related to the schedules, such as teams.
   */
  "included"?: Array<TeamReference>;
  /**
   * Metadata that is included in the response when listing schedules.
   */
  "meta"?: SchedulesResponseMeta;

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
      type: "Array<ScheduleListItem>",
    },
    included: {
      baseName: "included",
      type: "Array<TeamReference>",
    },
    meta: {
      baseName: "meta",
      type: "SchedulesResponseMeta",
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
    return Schedules.attributeTypeMap;
  }

  public constructor() {}
}
