/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsJourneyNodeTarget } from "./ProductAnalyticsJourneyNodeTarget";
import { ProductAnalyticsJourneySearch } from "./ProductAnalyticsJourneySearch";
import { ProductAnalyticsSampling } from "./ProductAnalyticsSampling";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Query definition for a journey drop-off analysis request.
 */
export class ProductAnalyticsJourneyDropOffQuery {
  /**
   * Sampling configuration for a query.
   */
  "sampling"?: ProductAnalyticsSampling;
  /**
   * Defines the steps of the journey and the filters applied to it.
   */
  "search": ProductAnalyticsJourneySearch;
  /**
   * A reference to a single step of the journey.
   */
  "target"?: ProductAnalyticsJourneyNodeTarget;
  /**
   * Maximum number of issues to return.
   */
  "topIssueCount"?: Int64;

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
    sampling: {
      baseName: "sampling",
      type: "ProductAnalyticsSampling",
    },
    search: {
      baseName: "search",
      type: "ProductAnalyticsJourneySearch",
      required: true,
    },
    target: {
      baseName: "target",
      type: "ProductAnalyticsJourneyNodeTarget",
    },
    topIssueCount: {
      baseName: "top_issue_count",
      type: "number",
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
    return ProductAnalyticsJourneyDropOffQuery.attributeTypeMap;
  }

  public constructor() {}
}
