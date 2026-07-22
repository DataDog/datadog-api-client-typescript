import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PrintReportResponseAttributes } from "./PrintReportResponseAttributes";
import { PrintReportType } from "./PrintReportType";

/**
 * The JSON:API data object for a print-only report.
 */
export class PrintReportResponseData {
  /**
   * The configuration and download URL for the initiated print-only report.
   */
  "attributes": PrintReportResponseAttributes;
  /**
   * The unique identifier of the report.
   */
  "id": string;
  /**
   * JSON:API resource type for a print-only report.
   */
  "type": PrintReportType;
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
    attributes: {
      baseName: "attributes",
      type: "PrintReportResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "PrintReportType",
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
    return PrintReportResponseData.attributeTypeMap;
  }

  public constructor() {}
}
