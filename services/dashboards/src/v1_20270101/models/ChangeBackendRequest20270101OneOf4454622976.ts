import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeTypeOptions } from "./ChangeTypeOptions";
import { CompareToOptions } from "./CompareToOptions";
import { DashboardInlineSchema8 } from "./DashboardInlineSchema8";
import { OrderByOptions } from "./OrderByOptions";
import { QuerySortOrder } from "./QuerySortOrder";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ChangeBackendRequest20270101OneOf4454622976 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryOptions"?: { [key: string]: DashboardInlineSchema8 };
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "changeType"?: ChangeTypeOptions;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compareTo"?: CompareToOptions;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "increaseGood"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "orderBy"?: OrderByOptions;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "orderDir"?: QuerySortOrder;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "q": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showPresent"?: boolean;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    queryOptions: {
      baseName: "_query_options",
      type: "{ [key: string]: DashboardInlineSchema8; }",
    },
    changeType: {
      baseName: "change_type",
      type: "ChangeTypeOptions",
    },
    compareTo: {
      baseName: "compare_to",
      type: "CompareToOptions",
    },
    increaseGood: {
      baseName: "increase_good",
      type: "boolean",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    orderBy: {
      baseName: "order_by",
      type: "OrderByOptions",
    },
    orderDir: {
      baseName: "order_dir",
      type: "QuerySortOrder",
    },
    q: {
      baseName: "q",
      type: "string",
      required: true,
    },
    showPresent: {
      baseName: "show_present",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ChangeBackendRequest20270101OneOf4454622976.attributeTypeMap;
  }

  public constructor() {}
}
