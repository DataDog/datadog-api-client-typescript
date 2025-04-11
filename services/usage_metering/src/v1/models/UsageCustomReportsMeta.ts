import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageCustomReportsPage } from "./UsageCustomReportsPage";

/**
 * The object containing document metadata.
 */
export class UsageCustomReportsMeta {
  /**
   * The object containing page total count.
   */
  "page"?: UsageCustomReportsPage;
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
    page: {
      baseName: "page",
      type: "UsageCustomReportsPage",
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
    return UsageCustomReportsMeta.attributeTypeMap;
  }

  public constructor() {}
}
