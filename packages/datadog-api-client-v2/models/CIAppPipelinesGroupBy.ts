/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppAggregateSort } from "./CIAppAggregateSort";
import { CIAppGroupByHistogram } from "./CIAppGroupByHistogram";
import { CIAppGroupByMissing } from "./CIAppGroupByMissing";
import { CIAppGroupByTotal } from "./CIAppGroupByTotal";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A group-by rule.
 */
export class CIAppPipelinesGroupBy {
  /**
   * The name of the facet to use (required).
   */
  "facet": string;
  /**
   * Used to perform a histogram computation (only for measure facets).
   * At most, 100 buckets are allowed, the number of buckets is `(max - min)/interval`.
   */
  "histogram"?: CIAppGroupByHistogram;
  /**
   * The maximum buckets to return for this group-by.
   */
  "limit"?: number;
  /**
   * The value to use for logs that don't have the facet used to group-by.
   */
  "missing"?: CIAppGroupByMissing;
  /**
   * A sort rule.
   */
  "sort"?: CIAppAggregateSort;
  /**
   * A resulting object to put the given computes in over all the matching records.
   */
  "total"?: CIAppGroupByTotal;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    facet: {
      type: "string",
      required: true,
    },
    histogram: {
      type: "CIAppGroupByHistogram",
    },
    limit: {
      type: "number",
      format: "int64",
    },
    missing: {
      type: "CIAppGroupByMissing",
    },
    sort: {
      type: "CIAppAggregateSort",
    },
    total: {
      type: "CIAppGroupByTotal",
    },
  };
}
