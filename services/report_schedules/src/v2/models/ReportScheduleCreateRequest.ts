import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleCreateRequestData } from "./ReportScheduleCreateRequestData";

/**
 * Request body for creating a report schedule.
 */
export class ReportScheduleCreateRequest {
  /**
   * The JSON:API data object for a report schedule creation request.
   */
  "data": ReportScheduleCreateRequestData;
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
      type: "ReportScheduleCreateRequestData",
      required: true,
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
    return ReportScheduleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
