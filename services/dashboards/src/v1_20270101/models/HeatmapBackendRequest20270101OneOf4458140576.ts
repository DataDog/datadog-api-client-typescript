import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatmapBackendRequestAnyOfAnyOfItemQuery } from "./HeatmapBackendRequestAnyOfAnyOfItemQuery";
import { HeatmapBackendRequestAnyOfAnyOfItemRequestType } from "./HeatmapBackendRequestAnyOfAnyOfItemRequestType";
import { RequestStyle } from "./RequestStyle";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatmapBackendRequest20270101OneOf4458140576 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numberFormat"?: WidgetNumberFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": HeatmapBackendRequestAnyOfAnyOfItemQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": HeatmapBackendRequestAnyOfAnyOfItemRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: RequestStyle;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
    },
    query: {
      baseName: "query",
      type: "HeatmapBackendRequestAnyOfAnyOfItemQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "HeatmapBackendRequestAnyOfAnyOfItemRequestType",
      required: true,
    },
    style: {
      baseName: "style",
      type: "RequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatmapBackendRequest20270101OneOf4458140576.attributeTypeMap;
  }

  public constructor() {}
}
