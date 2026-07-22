/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReportSchedulePatchRequestAttributes } from "./ReportSchedulePatchRequestAttributes";
import { ReportScheduleType } from "./ReportScheduleType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The JSON:API data object for a report schedule update request.
*/
export class ReportSchedulePatchRequestData {
  /**
   * The updated configuration of the report schedule. These values replace the existing
   * ones; the targeted resource (`resource_id` and `resource_type`) cannot be changed.
  */
  "attributes": ReportSchedulePatchRequestAttributes;
  /**
   * JSON:API resource type for report schedules.
  */
  "type": ReportScheduleType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "ReportSchedulePatchRequestAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "ReportScheduleType",
      "required": true,
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




    return ReportSchedulePatchRequestData.attributeTypeMap;

  }

  public constructor() {











  }
}









