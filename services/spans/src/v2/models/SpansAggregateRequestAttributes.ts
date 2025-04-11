import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansCompute } from "./SpansCompute";
import { SpansGroupBy } from "./SpansGroupBy";
import { SpansQueryFilter } from "./SpansQueryFilter";
import { SpansQueryOptions } from "./SpansQueryOptions";

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
      type: "{ [key: string]: any; }",
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
