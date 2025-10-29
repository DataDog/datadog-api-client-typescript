import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SankeyRequestDataAttributesSearchAudienceFilters } from "./SankeyRequestDataAttributesSearchAudienceFilters";
import { SankeyRequestDataAttributesSearchOccurrences } from "./SankeyRequestDataAttributesSearchOccurrences";

export class SankeyRequestDataAttributesSearch {
  "audienceFilters"?: SankeyRequestDataAttributesSearchAudienceFilters;
  "occurrences"?: SankeyRequestDataAttributesSearchOccurrences;
  "query"?: string;
  "subqueryId"?: string;
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
    audienceFilters: {
      baseName: "audience_filters",
      type: "SankeyRequestDataAttributesSearchAudienceFilters",
    },
    occurrences: {
      baseName: "occurrences",
      type: "SankeyRequestDataAttributesSearchOccurrences",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    subqueryId: {
      baseName: "subquery_id",
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
    return SankeyRequestDataAttributesSearch.attributeTypeMap;
  }

  public constructor() {}
}
