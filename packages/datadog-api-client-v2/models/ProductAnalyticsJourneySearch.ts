/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsBaseQuery } from "./ProductAnalyticsBaseQuery";
import { ProductAnalyticsJoinKeys } from "./ProductAnalyticsJoinKeys";
import { ProductAnalyticsJourneySearchFilters } from "./ProductAnalyticsJourneySearchFilters";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the steps of the journey and the filters applied to it.
 */
export class ProductAnalyticsJourneySearch {
  /**
   * Expression combining the node aliases in order, for example `A -> B -> C`.
   */
  "expression": string;
  /**
   * Filters applied on top of the journey step expression.
   */
  "filters"?: ProductAnalyticsJourneySearchFilters;
  /**
   * Identity join keys used to stitch events belonging to the same user or session.
   */
  "joinKeys"?: ProductAnalyticsJoinKeys;
  /**
   * Map of node alias to the query matching that step of the journey.
   * Every alias used in `expression` must have an entry here.
   */
  "nodeObjects": { [key: string]: ProductAnalyticsBaseQuery };

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
    expression: {
      baseName: "expression",
      type: "string",
      required: true,
    },
    filters: {
      baseName: "filters",
      type: "ProductAnalyticsJourneySearchFilters",
    },
    joinKeys: {
      baseName: "join_keys",
      type: "ProductAnalyticsJoinKeys",
    },
    nodeObjects: {
      baseName: "node_objects",
      type: "{ [key: string]: ProductAnalyticsBaseQuery; }",
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
    return ProductAnalyticsJourneySearch.attributeTypeMap;
  }

  public constructor() {}
}
