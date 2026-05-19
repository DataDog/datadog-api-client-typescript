import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PaginationMetaPage } from "./PaginationMetaPage";

/**
 * Pagination metadata for a list of dashboard usage records.
 */
export class ListDashboardsUsageResponseMeta {
  /**
   * Offset-based pagination schema.
   */
  "page"?: PaginationMetaPage;
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
      type: "PaginationMetaPage",
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
    return ListDashboardsUsageResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
