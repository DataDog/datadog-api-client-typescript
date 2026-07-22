/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReportScheduleIncludedResource } from "./ReportScheduleIncludedResource";
import { ReportScheduleResponseData } from "./ReportScheduleResponseData";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Response containing a single report schedule.
*/
export class ReportScheduleResponse {
  /**
   * The JSON:API data object representing a report schedule.
  */
  "data": ReportScheduleResponseData;
  /**
   * Related resources included with the report schedule, such as the author.
  */
  "included"?: Array<ReportScheduleIncludedResource>;

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
      "type": "ReportScheduleResponseData",
      "required": true,
    },
    "included": {
      "baseName": "included",
      "type": "Array<ReportScheduleIncludedResource>",
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




    return ReportScheduleResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









