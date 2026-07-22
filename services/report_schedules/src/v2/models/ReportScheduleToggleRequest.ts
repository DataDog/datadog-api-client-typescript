import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleToggleRequestData } from "./ReportScheduleToggleRequestData";

/**
 * Request body for toggling a report schedule.
 */
export class ReportScheduleToggleRequest {
  /**
   * The JSON:API data object for a report schedule toggle request.
   */
  "data": ReportScheduleToggleRequestData;
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
      type: "ReportScheduleToggleRequestData",
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
    return ReportScheduleToggleRequest.attributeTypeMap;
  }

  public constructor() {}
}
