/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansCompute } from "./SpansCompute";
import { SpansGroupBy } from "./SpansGroupBy";
import { SpansQueryFilter } from "./SpansQueryFilter";
import { SpansQueryOptions } from "./SpansQueryOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object containing all the query parameters.
 */
export class SpansAggregateRequestAttributes {
  /**
   * The list of metrics or timeseries to compute for the retrieved buckets.
   */
  "compute"?: Array<SpansCompute>;
  /**
   * The search and filter query settings.
   */
  "filter"?: SpansQueryFilter;
  /**
   * The rules for the group by.
   */
  "groupBy"?: Array<SpansGroupBy>;
  /**
   * Global query options that are used during the query.
   * Note: You should only supply timezone or time offset but not both otherwise the query will fail.
   */
  "options"?: SpansQueryOptions;

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
    compute: {
      baseName: "compute",
      type: "Array<SpansCompute>",
    },
    filter: {
      baseName: "filter",
      type: "SpansQueryFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<SpansGroupBy>",
    },
    options: {
      baseName: "options",
      type: "SpansQueryOptions",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SpansAggregateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
