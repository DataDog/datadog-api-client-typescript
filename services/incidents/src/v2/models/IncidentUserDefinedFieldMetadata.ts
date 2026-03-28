import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata for autocomplete-type user-defined fields, describing how to populate autocomplete options.
 */
export class IncidentUserDefinedFieldMetadata {
  /**
   * The category of the autocomplete source.
   */
  "category": string;
  /**
   * The query parameter used to limit the number of autocomplete results.
   */
  "searchLimitParam": string;
  /**
   * Additional query parameters to include in the search URL.
   */
  "searchParams": { [key: string]: any };
  /**
   * The query parameter used to pass typed input to the search URL.
   */
  "searchQueryParam": string;
  /**
   * The JSON path to the results in the response body.
   */
  "searchResultPath": string;
  /**
   * The URL used to populate autocomplete options.
   */
  "searchUrl": string;
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
    category: {
      baseName: "category",
      type: "string",
      required: true,
    },
    searchLimitParam: {
      baseName: "search_limit_param",
      type: "string",
      required: true,
    },
    searchParams: {
      baseName: "search_params",
      type: "{ [key: string]: any; }",
      required: true,
    },
    searchQueryParam: {
      baseName: "search_query_param",
      type: "string",
      required: true,
    },
    searchResultPath: {
      baseName: "search_result_path",
      type: "string",
      required: true,
    },
    searchUrl: {
      baseName: "search_url",
      type: "string",
      required: true,
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
    return IncidentUserDefinedFieldMetadata.attributeTypeMap;
  }

  public constructor() {}
}
