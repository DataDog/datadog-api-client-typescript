/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FunnelComparisonDuration } from "./FunnelComparisonDuration";
import { ProductAnalyticsFunnelQuery } from "./ProductAnalyticsFunnelQuery";
import { ProductAnalyticsFunnelRequestType } from "./ProductAnalyticsFunnelRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
