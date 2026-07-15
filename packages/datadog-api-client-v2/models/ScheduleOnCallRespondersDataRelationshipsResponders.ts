/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleOnCallRespondersDataRelationshipsRespondersDataItems } from "./ScheduleOnCallRespondersDataRelationshipsRespondersDataItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the list of per-position (previous, current, next) responder groups for the schedule.
 */
export class ScheduleOnCallRespondersDataRelationshipsResponders {
  /**
   * Array of references to the responder groups included in the response.
   */
  "data"?: Array<ScheduleOnCallRespondersDataRelationshipsRespondersDataItems>;

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
      type: "Array<ScheduleOnCallRespondersDataRelationshipsRespondersDataItems>",
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
    return ScheduleOnCallRespondersDataRelationshipsResponders.attributeTypeMap;
  }

  public constructor() {}
}
