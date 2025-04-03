import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsQueryFilter } from "./EventsQueryFilter";
import { EventsQueryOptions } from "./EventsQueryOptions";
import { EventsRequestPage } from "./EventsRequestPage";
import { EventsSort } from "./EventsSort";

/**
 * The object sent with the request to retrieve a list of events from your organization.
 */
export class EventsListRequest {
  /**
   * The search and filter query settings.
   */
  "filter"?: EventsQueryFilter;
  /**
   * The global query options that are used. Either provide a timezone or a time offset but not both,
   * otherwise the query fails.
   */
  "options"?: EventsQueryOptions;
  /**
   * Pagination settings.
   */
  "page"?: EventsRequestPage;
  /**
   * The sort parameters when querying events.
   */
  "sort"?: EventsSort;
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
      type: "EventsQueryFilter",
    },
    options: {
      baseName: "options",
      type: "EventsQueryOptions",
    },
    page: {
      baseName: "page",
      type: "EventsRequestPage",
    },
    sort: {
      baseName: "sort",
      type: "EventsSort",
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
    return EventsListRequest.attributeTypeMap;
  }

  public constructor() {}
}
