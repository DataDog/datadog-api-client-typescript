import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageSpecifiedCustomReportsData } from "./UsageSpecifiedCustomReportsData";
import { UsageSpecifiedCustomReportsMeta } from "./UsageSpecifiedCustomReportsMeta";

/**
 * Returns available specified custom reports.
 */
export class UsageSpecifiedCustomReportsResponse {
  /**
   * Response containing date and type for specified custom reports.
   */
  "data"?: UsageSpecifiedCustomReportsData;
  /**
   * The object containing document metadata.
   */
  "meta"?: UsageSpecifiedCustomReportsMeta;
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
      type: "UsageSpecifiedCustomReportsData",
    },
    meta: {
      baseName: "meta",
      type: "UsageSpecifiedCustomReportsMeta",
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
    return UsageSpecifiedCustomReportsResponse.attributeTypeMap;
  }

  public constructor() {}
}
