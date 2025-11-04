/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FacetInfoRequestDataAttributesSearch } from "./FacetInfoRequestDataAttributesSearch";
import { FacetInfoRequestDataAttributesTermSearch } from "./FacetInfoRequestDataAttributesTermSearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class FacetInfoRequestDataAttributes {
  "facetId": string;
  "limit": number;
  "search"?: FacetInfoRequestDataAttributesSearch;
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
