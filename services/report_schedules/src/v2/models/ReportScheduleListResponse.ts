import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleIncludedResource } from "./ReportScheduleIncludedResource";
import { ReportScheduleListResponseData } from "./ReportScheduleListResponseData";
import { ReportScheduleListResponseLinks } from "./ReportScheduleListResponseLinks";
import { ReportScheduleListResponseMeta } from "./ReportScheduleListResponseMeta";

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
    data: {
      baseName: "data",
      type: "Array<ReportScheduleListResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<ReportScheduleIncludedResource>",
    },
    links: {
      baseName: "links",
      type: "ReportScheduleListResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "ReportScheduleListResponseMeta",
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

  public constructor() {}
}
