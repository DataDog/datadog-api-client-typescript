/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsAnalyticsQuery } from "./ProductAnalyticsAnalyticsQuery";
import { ProductAnalyticsExecutionType } from "./ProductAnalyticsExecutionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for an analytics request.
 */
export class ProductAnalyticsAnalyticsRequestAttributes {
  /**
   * Override the query execution strategy.
   */
  "enforcedExecutionType"?: ProductAnalyticsExecutionType;
  /**
   * Start time in epoch milliseconds. Must be less than `to`.
   */
  "from": number;
  /**
   * The analytics query definition containing a base query, compute rule, and optional grouping.
   */
  "query": ProductAnalyticsAnalyticsQuery;
  /**
   * Optional request ID for multi-step query continuation.
   */
  "requestId"?: string;
  /**
   * End time in epoch milliseconds.
   */
  "to": number;

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
    enforcedExecutionType: {
      baseName: "enforced_execution_type",
      type: "ProductAnalyticsExecutionType",
    },
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    query: {
      baseName: "query",
      type: "ProductAnalyticsAnalyticsQuery",
      required: true,
    },
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "int64",
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
    return ProductAnalyticsAnalyticsRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
