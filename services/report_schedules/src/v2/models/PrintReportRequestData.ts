import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PrintReportRequestAttributes } from "./PrintReportRequestAttributes";
import { PrintReportType } from "./PrintReportType";

/**
 * The JSON:API data object for a print report request.
 */
export class PrintReportRequestData {
  /**
   * The configuration for a print-only report. Specify exactly one of `timeframe` (for a
   * relative time window) or both `from_ts` and `to_ts` (for an absolute time range).
   */
  "attributes": PrintReportRequestAttributes;
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
      type: "PrintReportRequestAttributes",
      required: true,
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
    return PrintReportRequestData.attributeTypeMap;
  }

  public constructor() {}
}
