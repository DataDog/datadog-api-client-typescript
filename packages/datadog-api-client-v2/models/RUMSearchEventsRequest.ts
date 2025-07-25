/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMQueryFilter } from "./RUMQueryFilter";
import { RUMQueryOptions } from "./RUMQueryOptions";
import { RUMQueryPageOptions } from "./RUMQueryPageOptions";
import { RUMSort } from "./RUMSort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The request for a RUM events list.
 */
export class RUMSearchEventsRequest {
  /**
   * The search and filter query settings.
   */
  "filter"?: RUMQueryFilter;
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
   * Sort parameters when querying events.
   */
  "sort"?: RUMSort;

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
      type: "RUMQueryFilter",
    },
    options: {
      baseName: "options",
      type: "RUMQueryOptions",
    },
    page: {
      baseName: "page",
      type: "RUMQueryPageOptions",
    },
    sort: {
      baseName: "sort",
      type: "RUMSort",
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
    return RUMSearchEventsRequest.attributeTypeMap;
  }

  public constructor() {}
}
