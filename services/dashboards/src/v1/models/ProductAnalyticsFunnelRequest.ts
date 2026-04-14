import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FunnelComparisonDuration } from "./FunnelComparisonDuration";
import { ProductAnalyticsFunnelQuery } from "./ProductAnalyticsFunnelQuery";
import { ProductAnalyticsFunnelRequestType } from "./ProductAnalyticsFunnelRequestType";

/**
 * User journey funnel widget request.
 */
export class ProductAnalyticsFunnelRequest {
  /**
   * Comparison segments.
   */
  "comparisonSegments"?: Array<string>;
  /**
   * Comparison time configuration for funnel widgets.
   */
  "comparisonTime"?: FunnelComparisonDuration;
  /**
   * User journey funnel query definition.
   */
  "query": ProductAnalyticsFunnelQuery;
  /**
   * Request type for user journey funnel widget.
   */
  "requestType": ProductAnalyticsFunnelRequestType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    comparisonSegments: {
      baseName: "comparison_segments",
      type: "Array<string>",
    },
    comparisonTime: {
      baseName: "comparison_time",
      type: "FunnelComparisonDuration",
    },
    query: {
      baseName: "query",
      type: "ProductAnalyticsFunnelQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "ProductAnalyticsFunnelRequestType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsFunnelRequest.attributeTypeMap;
  }

  public constructor() {}
}
