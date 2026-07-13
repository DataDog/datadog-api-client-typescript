import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetReportScheduleResponseData } from "./DatasetReportScheduleResponseData";
import { ReportScheduleIncludedResource } from "./ReportScheduleIncludedResource";

/**
 * Response containing a list of report schedules for a published dataset.
 */
export class DatasetReportScheduleListResponse {
  /**
   * A list of report schedules for the dataset.
   */
  "data": Array<DatasetReportScheduleResponseData>;
  /**
   * Related resources included with the report schedules, such as authors.
   */
  "included"?: Array<ReportScheduleIncludedResource>;
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
      type: "Array<DatasetReportScheduleResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<ReportScheduleIncludedResource>",
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
    return DatasetReportScheduleListResponse.attributeTypeMap;
  }

  public constructor() {}
}
