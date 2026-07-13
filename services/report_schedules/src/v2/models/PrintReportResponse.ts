import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PrintReportResponseData } from "./PrintReportResponseData";

/**
 * Response containing the initiated print-only report.
 */
export class PrintReportResponse {
  /**
   * The JSON:API data object for a print-only report.
   */
  "data": PrintReportResponseData;
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
      type: "PrintReportResponseData",
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
    return PrintReportResponse.attributeTypeMap;
  }

  public constructor() {}
}
