import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardUsage } from "./DashboardUsage";
import { ListDashboardsUsageResponseLinks } from "./ListDashboardsUsageResponseLinks";
import { ListDashboardsUsageResponseMeta } from "./ListDashboardsUsageResponseMeta";

/**
 * Paginated list of dashboard usage records.
 */
export class ListDashboardsUsageResponse {
  /**
   * Dashboard usage records, one per dashboard in the caller's organization.
   */
  "data": Array<DashboardUsage>;
  /**
   * Pagination links for a list of dashboard usage records.
   */
  "links"?: ListDashboardsUsageResponseLinks;
  /**
   * Pagination metadata for a list of dashboard usage records.
   */
  "meta": ListDashboardsUsageResponseMeta;
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
      type: "Array<DashboardUsage>",
      required: true,
    },
    links: {
      baseName: "links",
      type: "ListDashboardsUsageResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "ListDashboardsUsageResponseMeta",
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
    return ListDashboardsUsageResponse.attributeTypeMap;
  }

  public constructor() {}
}
