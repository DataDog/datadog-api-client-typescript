import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleListResponsePagination } from "./ReportScheduleListResponsePagination";

/**
 * Metadata for a paginated report schedule list response.
 */
export class ReportScheduleListResponseMeta {
  /**
   * Offset and limit pagination metadata for a report schedule list response.
   */
  "pagination"?: ReportScheduleListResponsePagination;
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
    pagination: {
      baseName: "pagination",
      type: "ReportScheduleListResponsePagination",
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
    return ReportScheduleListResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
