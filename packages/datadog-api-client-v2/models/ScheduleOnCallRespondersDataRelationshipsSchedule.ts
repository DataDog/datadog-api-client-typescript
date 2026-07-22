/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleOnCallRespondersDataRelationshipsScheduleData } from "./ScheduleOnCallRespondersDataRelationshipsScheduleData";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Defines the relationship to the schedule this on-call responders lookup was performed for.
*/
export class ScheduleOnCallRespondersDataRelationshipsSchedule {
  /**
   * Represents a reference to the schedule this on-call responders lookup was performed for.
  */
  "data"?: ScheduleOnCallRespondersDataRelationshipsScheduleData;

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
    "data": {
      "baseName": "data",
      "type": "ScheduleOnCallRespondersDataRelationshipsScheduleData",
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




    return ScheduleOnCallRespondersDataRelationshipsSchedule.attributeTypeMap;

  }

  public constructor() {











  }
}









