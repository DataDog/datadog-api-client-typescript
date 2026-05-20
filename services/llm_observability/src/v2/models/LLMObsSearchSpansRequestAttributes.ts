import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsSpanFilter } from "./LLMObsSpanFilter";
import { LLMObsSpanPageQuery } from "./LLMObsSpanPageQuery";
import { LLMObsSpanSearchOptions } from "./LLMObsSpanSearchOptions";

/**
 * Attributes of an LLM Observability spans search request.
 */
export class LLMObsSearchSpansRequestAttributes {
  /**
   * Filter criteria for an LLM Observability span search.
   */
  "filter"?: LLMObsSpanFilter;
  /**
   * Additional options for a span search request.
   */
  "options"?: LLMObsSpanSearchOptions;
  /**
   * Pagination settings for a span search request.
   */
  "page"?: LLMObsSpanPageQuery;
  /**
   * Sort order for the results. Use `-` prefix for descending order.
   */
  "sort"?: string;
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
      type: "LLMObsSpanFilter",
    },
    options: {
      baseName: "options",
      type: "LLMObsSpanSearchOptions",
    },
    page: {
      baseName: "page",
      type: "LLMObsSpanPageQuery",
    },
    sort: {
      baseName: "sort",
      type: "string",
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
    return LLMObsSearchSpansRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
