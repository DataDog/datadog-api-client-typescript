import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageCustomReportsData } from "./UsageCustomReportsData";
import { UsageCustomReportsMeta } from "./UsageCustomReportsMeta";

/**
 * Response containing available custom reports.
 */
export class UsageCustomReportsResponse {
  /**
   * An array of available custom reports.
   */
  "data"?: Array<UsageCustomReportsData>;
  /**
   * The object containing document metadata.
   */
  "meta"?: UsageCustomReportsMeta;
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
      type: "Array<UsageCustomReportsData>",
    },
    meta: {
      baseName: "meta",
      type: "UsageCustomReportsMeta",
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
    return UsageCustomReportsResponse.attributeTypeMap;
  }

  public constructor() {}
}
