import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppCompute } from "./CIAppCompute";
import { CIAppPipelinesGroupBy } from "./CIAppPipelinesGroupBy";
import { CIAppPipelinesQueryFilter } from "./CIAppPipelinesQueryFilter";
import { CIAppQueryOptions } from "./CIAppQueryOptions";

/**
 * The object sent with the request to retrieve aggregation buckets of pipeline events from your organization.
 */
export class CIAppPipelinesAggregateRequest {
  /**
   * The list of metrics or timeseries to compute for the retrieved buckets.
   */
  "compute"?: Array<CIAppCompute>;
  /**
   * The search and filter query settings.
   */
  "filter"?: CIAppPipelinesQueryFilter;
  /**
   * The rules for the group-by.
   */
  "groupBy"?: Array<CIAppPipelinesGroupBy>;
  /**
   * Global query options that are used during the query.
   * Only supply timezone or time offset, not both. Otherwise, the query fails.
   */
  "options"?: CIAppQueryOptions;
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
      type: "Array<CIAppCompute>",
    },
    filter: {
      baseName: "filter",
      type: "CIAppPipelinesQueryFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<CIAppPipelinesGroupBy>",
    },
    options: {
      baseName: "options",
      type: "CIAppQueryOptions",
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
    return CIAppPipelinesAggregateRequest.attributeTypeMap;
  }

  public constructor() {}
}
