/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReportScheduleIncludedResource } from "./ReportScheduleIncludedResource";
import { ReportScheduleListResponseData } from "./ReportScheduleListResponseData";
import { ReportScheduleListResponseLinks } from "./ReportScheduleListResponseLinks";
import { ReportScheduleListResponseMeta } from "./ReportScheduleListResponseMeta";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Response containing a list of report schedules.
*/
export class ReportScheduleListResponse {
  /**
   * The list of report schedules.
  */
  "data": Array<ReportScheduleListResponseData>;
  /**
   * Related resources included with the report schedules, such as authors and rendered resources.
  */
  "included"?: Array<ReportScheduleIncludedResource>;
  /**
   * Pagination links for navigating a report schedule list response.
  */
  "links"?: ReportScheduleListResponseLinks;
  /**
   * Metadata for a paginated report schedule list response.
  */
  "meta"?: ReportScheduleListResponseMeta;

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
      "type": "Array<ReportScheduleListResponseData>",
      "required": true,
    },
    "included": {
      "baseName": "included",
      "type": "Array<ReportScheduleIncludedResource>",
    },
    "links": {
      "baseName": "links",
      "type": "ReportScheduleListResponseLinks",
    },
    "meta": {
      "baseName": "meta",
      "type": "ReportScheduleListResponseMeta",
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




    return ReportScheduleListResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









