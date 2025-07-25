/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMCompute } from "./RUMCompute";
import { RUMGroupBy } from "./RUMGroupBy";
import { RUMQueryFilter } from "./RUMQueryFilter";
import { RUMQueryOptions } from "./RUMQueryOptions";
import { RUMQueryPageOptions } from "./RUMQueryPageOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object sent with the request to retrieve aggregation buckets of RUM events from your organization.
 */
export class RUMAggregateRequest {
  /**
   * The list of metrics or timeseries to compute for the retrieved buckets.
   */
  "compute"?: Array<RUMCompute>;
  /**
   * The search and filter query settings.
   */
  "filter"?: RUMQueryFilter;
  /**
   * The rules for the group by.
   */
  "groupBy"?: Array<RUMGroupBy>;
  /**
   * Global query options that are used during the query.
   * Note: Only supply timezone or time offset, not both. Otherwise, the query fails.
   */
  "options"?: RUMQueryOptions;
  /**
   * Paging attributes for listing events.
   */
  "page"?: RUMQueryPageOptions;

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
      type: "Array<RUMCompute>",
    },
    filter: {
      baseName: "filter",
      type: "RUMQueryFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<RUMGroupBy>",
    },
    options: {
      baseName: "options",
      type: "RUMQueryOptions",
    },
    page: {
      baseName: "page",
      type: "RUMQueryPageOptions",
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
    return RUMAggregateRequest.attributeTypeMap;
  }

  public constructor() {}
}
