/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleOnCallRespondersDataRelationshipsResponders } from "./ScheduleOnCallRespondersDataRelationshipsResponders";
import { ScheduleOnCallRespondersDataRelationshipsSchedule } from "./ScheduleOnCallRespondersDataRelationshipsSchedule";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Relationships for a schedule's on-call responders lookup, including the schedule and its responder groups.
*/
export class ScheduleOnCallRespondersDataRelationships {
  /**
   * Defines the list of per-position (previous, current, next) responder groups for the schedule.
  */
  "responders"?: ScheduleOnCallRespondersDataRelationshipsResponders;
  /**
   * Defines the relationship to the schedule this on-call responders lookup was performed for.
  */
  "schedule"?: ScheduleOnCallRespondersDataRelationshipsSchedule;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "responders": {
      "baseName": "responders",
      "type": "ScheduleOnCallRespondersDataRelationshipsResponders",
    },
    "schedule": {
      "baseName": "schedule",
      "type": "ScheduleOnCallRespondersDataRelationshipsSchedule",
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




    return ScheduleOnCallRespondersDataRelationships.attributeTypeMap;

  }

  public constructor() {











  }
}









