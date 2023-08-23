/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansListRequestPage } from "./SpansListRequestPage";
import { SpansQueryFilter } from "./SpansQueryFilter";
import { SpansQueryOptions } from "./SpansQueryOptions";
import { SpansSort } from "./SpansSort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object containing all the query parameters.
 */
export class SpansListRequestAttributes {
  /**
   * The search and filter query settings.
   */
  "filter"?: SpansQueryFilter;
  /**
   * Global query options that are used during the query.
   * Note: You should only supply timezone or time offset but not both otherwise the query will fail.
   */
  "options"?: SpansQueryOptions;
  /**
   * Paging attributes for listing spans.
   */
  "page"?: SpansListRequestPage;
  /**
   * Sort parameters when querying spans.
   */
  "sort"?: SpansSort;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    filter: {
      type: "SpansQueryFilter",
    },
    options: {
      type: "SpansQueryOptions",
    },
    page: {
      type: "SpansListRequestPage",
    },
    sort: {
      type: "SpansSort",
    },
  };
}
