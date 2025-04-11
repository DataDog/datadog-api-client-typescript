import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageSpecifiedCustomReportsPage } from "./UsageSpecifiedCustomReportsPage";

/**
 * The object containing document metadata.
 */
export class UsageSpecifiedCustomReportsMeta {
  /**
   * The object containing page total count for specified ID.
   */
  "page"?: UsageSpecifiedCustomReportsPage;
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
      type: "UsageSpecifiedCustomReportsPage",
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
    return UsageSpecifiedCustomReportsMeta.attributeTypeMap;
  }

  public constructor() {}
}
