/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FacetInfoRequestDataAttributesSearch } from "./FacetInfoRequestDataAttributesSearch";
import { FacetInfoRequestDataAttributesTermSearch } from "./FacetInfoRequestDataAttributesTermSearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for the facet info request, specifying which facet to query and optional filters to apply.
 */
export class FacetInfoRequestDataAttributes {
  /**
   * The identifier of the facet attribute to retrieve value information for.
   */
  "facetId": string;
  /**
   * Maximum number of facet values to return in the response.
   */
  "limit": number;
  /**
   * Query-based search configuration for filtering the audience context when retrieving facet values.
   */
  "search"?: FacetInfoRequestDataAttributesSearch;
  /**
   * Term-level search configuration for filtering facet values by an exact or partial term match.
   */
  "termSearch"?: FacetInfoRequestDataAttributesTermSearch;

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
    facetId: {
      baseName: "facet_id",
      type: "string",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      required: true,
      format: "int64",
    },
    search: {
      baseName: "search",
      type: "FacetInfoRequestDataAttributesSearch",
    },
    termSearch: {
      baseName: "term_search",
      type: "FacetInfoRequestDataAttributesTermSearch",
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
    return FacetInfoRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
