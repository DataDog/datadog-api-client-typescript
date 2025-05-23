/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleUpdateRequestData } from "./ScheduleUpdateRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A top-level wrapper for a schedule update request, referring to the `data` object with the new details.
 */
export class ScheduleUpdateRequest {
  /**
   * Contains all data needed to update an existing schedule, including its attributes (such as name and time zone) and any relationships to teams.
   */
  "data": ScheduleUpdateRequestData;

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
      type: "ScheduleUpdateRequestData",
      required: true,
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
    return ScheduleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
