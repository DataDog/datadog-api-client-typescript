import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppQueryOptions } from "./CIAppQueryOptions";
import { CIAppQueryPageOptions } from "./CIAppQueryPageOptions";
import { CIAppSort } from "./CIAppSort";
import { CIAppTestsQueryFilter } from "./CIAppTestsQueryFilter";

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
