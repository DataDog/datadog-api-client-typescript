/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppQueryOptions } from "./CIAppQueryOptions";
import { CIAppQueryPageOptions } from "./CIAppQueryPageOptions";
import { CIAppSort } from "./CIAppSort";
import { CIAppTestsQueryFilter } from "./CIAppTestsQueryFilter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The request for a tests search.
 */
export class CIAppTestEventsRequest {
  /**
   * The search and filter query settings.
   */
  "filter"?: CIAppTestsQueryFilter;
  /**
   * Global query options that are used during the query.
   * Only supply timezone or time offset, not both. Otherwise, the query fails.
   */
  "options"?: CIAppQueryOptions;
  /**
   * Paging attributes for listing events.
   */
  "page"?: CIAppQueryPageOptions;
  /**
   * Sort parameters when querying events.
   */
  "sort"?: CIAppSort;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    filter: {
      baseName: "filter",
      type: "CIAppTestsQueryFilter",
    },
    options: {
      baseName: "options",
      type: "CIAppQueryOptions",
    },
    page: {
      baseName: "page",
      type: "CIAppQueryPageOptions",
    },
    sort: {
      baseName: "sort",
      type: "CIAppSort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CIAppTestEventsRequest.attributeTypeMap;
  }

  public constructor() {}
}
