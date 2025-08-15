/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansAggregateSort } from "./SpansAggregateSort";
import { SpansGroupByHistogram } from "./SpansGroupByHistogram";
import { SpansGroupByMissing } from "./SpansGroupByMissing";
import { SpansGroupByTotal } from "./SpansGroupByTotal";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A group by rule.
 */
export class SpansGroupBy {
  /**
   * The name of the facet to use (required).
   */
  "facet": string;
  /**
   * Used to perform a histogram computation (only for measure facets).
   * Note: At most 100 buckets are allowed, the number of buckets is (max - min)/interval.
   */
  "histogram"?: SpansGroupByHistogram;
  /**
   * The maximum buckets to return for this group by.
   */
  "limit"?: number;
  /**
   * The value to use for spans that don't have the facet used to group by.
   */
  "missing"?: SpansGroupByMissing;
  /**
   * A sort rule.
   */
  "sort"?: SpansAggregateSort;
  /**
   * A resulting object to put the given computes in over all the matching records.
   */
  "total"?: SpansGroupByTotal;

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
    facet: {
      baseName: "facet",
      type: "string",
      required: true,
    },
    histogram: {
      baseName: "histogram",
      type: "SpansGroupByHistogram",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    missing: {
      baseName: "missing",
      type: "SpansGroupByMissing",
    },
    sort: {
      baseName: "sort",
      type: "SpansAggregateSort",
    },
    total: {
      baseName: "total",
      type: "SpansGroupByTotal",
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
    return SpansGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
