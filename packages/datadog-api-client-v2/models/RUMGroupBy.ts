/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMAggregateSort } from "./RUMAggregateSort";
import { RUMGroupByHistogram } from "./RUMGroupByHistogram";
import { RUMGroupByMissing } from "./RUMGroupByMissing";
import { RUMGroupByTotal } from "./RUMGroupByTotal";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A group-by rule.
*/
export class RUMGroupBy {
  /**
   * The name of the facet to use (required).
  */
  "facet": string;
  /**
   * Used to perform a histogram computation (only for measure facets).
   * Note: At most 100 buckets are allowed, the number of buckets is (max - min)/interval.
  */
  "histogram"?: RUMGroupByHistogram;
  /**
   * The maximum buckets to return for this group-by.
  */
  "limit"?: number;
  /**
   * The value to use for logs that don't have the facet used to group by.
  */
  "missing"?: RUMGroupByMissing;
  /**
   * A sort rule.
  */
  "sort"?: RUMAggregateSort;
  /**
   * A resulting object to put the given computes in over all the matching records.
  */
  "total"?: RUMGroupByTotal;

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
    "facet": {
      "baseName": "facet",
      "type": "string",
      "required": true,
    },
    "histogram": {
      "baseName": "histogram",
      "type": "RUMGroupByHistogram",
    },
    "limit": {
      "baseName": "limit",
      "type": "number",
      "format": "int64",
    },
    "missing": {
      "baseName": "missing",
      "type": "RUMGroupByMissing",
    },
    "sort": {
      "baseName": "sort",
      "type": "RUMAggregateSort",
    },
    "total": {
      "baseName": "total",
      "type": "RUMGroupByTotal",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return RUMGroupBy.attributeTypeMap;

  }

  public constructor() {











  }
}









