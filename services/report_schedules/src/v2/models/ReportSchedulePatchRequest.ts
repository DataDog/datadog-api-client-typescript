import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportSchedulePatchRequestData } from "./ReportSchedulePatchRequestData";

/**
 * Request body for updating a report schedule.
 */
export class ReportSchedulePatchRequest {
  /**
   * The JSON:API data object for a report schedule update request.
   */
  "data": ReportSchedulePatchRequestData;
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
      type: "ReportSchedulePatchRequestData",
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
    return ReportSchedulePatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
