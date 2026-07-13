import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PrintReportRequestData } from "./PrintReportRequestData";

/**
 * Request body for initiating a print-only report.
 */
export class PrintReportRequest {
  /**
   * The JSON:API data object for a print report request.
   */
  "data": PrintReportRequestData;
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
      type: "PrintReportRequestData",
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
    return PrintReportRequest.attributeTypeMap;
  }

  public constructor() {}
}
