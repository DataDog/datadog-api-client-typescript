import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FunnelSuggestionRequestDataAttributesSearch } from "./FunnelSuggestionRequestDataAttributesSearch";
import { FunnelSuggestionRequestDataAttributesTermSearch } from "./FunnelSuggestionRequestDataAttributesTermSearch";
import { FunnelSuggestionRequestDataAttributesTime } from "./FunnelSuggestionRequestDataAttributesTime";

export class FunnelSuggestionRequestDataAttributes {
  "dataSource"?: string;
  "search"?: FunnelSuggestionRequestDataAttributesSearch;
  "termSearch"?: FunnelSuggestionRequestDataAttributesTermSearch;
  "time"?: FunnelSuggestionRequestDataAttributesTime;
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
    dataSource: {
      baseName: "data_source",
      type: "string",
    },
    search: {
      baseName: "search",
      type: "FunnelSuggestionRequestDataAttributesSearch",
    },
    termSearch: {
      baseName: "term_search",
      type: "FunnelSuggestionRequestDataAttributesTermSearch",
    },
    time: {
      baseName: "time",
      type: "FunnelSuggestionRequestDataAttributesTime",
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
    return FunnelSuggestionRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
