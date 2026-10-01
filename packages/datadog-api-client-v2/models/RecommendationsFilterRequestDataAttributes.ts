/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RecommendationsFilterRequestScope } from "./RecommendationsFilterRequestScope";
import { RecommendationsFilterRequestSortItems } from "./RecommendationsFilterRequestSortItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes used to filter and sort cost recommendations.
 */
export class RecommendationsFilterRequestDataAttributes {
  /**
   * Filter expression applied to the recommendations. When supplied, this attribute overrides
   * `data.id`, including when empty. When omitted, `data.id` is used. If the resulting filter
   * is empty, it defaults to `*`. Scope, view, and pagination still apply.
   */
  "filter"?: string;
  /**
   * Recommendations scope. Defaults to `ccm`; use `experiment` for experimental recommendations or `*` for both.
   */
  "scope"?: RecommendationsFilterRequestScope;
  /**
   * Ordered list of sort clauses applied to the result set.
   */
  "sort"?: Array<RecommendationsFilterRequestSortItems>;
  /**
   * Active view name (for example, `active`, `dismissed`, `open`, `in-progress`, or `completed`).
   */
  "view"?: string;

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
    filter: {
      baseName: "filter",
      type: "string",
    },
    scope: {
      baseName: "scope",
      type: "RecommendationsFilterRequestScope",
    },
    sort: {
      baseName: "sort",
      type: "Array<RecommendationsFilterRequestSortItems>",
    },
    view: {
      baseName: "view",
      type: "string",
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
    return RecommendationsFilterRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
