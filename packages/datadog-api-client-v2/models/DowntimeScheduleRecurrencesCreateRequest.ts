/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeScheduleRecurrenceCreateUpdateRequest } from "./DowntimeScheduleRecurrenceCreateUpdateRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A recurring downtime schedule definition.
 */
export class DowntimeScheduleRecurrencesCreateRequest {
  /**
   * A list of downtime recurrences.
   */
  "recurrences": Array<DowntimeScheduleRecurrenceCreateUpdateRequest>;
  /**
   * The timezone in which to schedule the downtime.
   */
  "timezone"?: string;

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
    recurrences: {
      baseName: "recurrences",
      type: "Array<DowntimeScheduleRecurrenceCreateUpdateRequest>",
      required: true,
    },
    timezone: {
      baseName: "timezone",
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
    return DowntimeScheduleRecurrencesCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
