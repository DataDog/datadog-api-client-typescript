/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssuesSearchResultAttributes } from "./IssuesSearchResultAttributes";
import { IssuesSearchResultRelationships } from "./IssuesSearchResultRelationships";
import { IssuesSearchResultType } from "./IssuesSearchResultType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Result matching the search query.
 */
export class IssuesSearchResult {
  /**
   * Object containing the information of a search result.
   */
  "attributes": IssuesSearchResultAttributes;
  /**
   * Search result identifier (matches the nested issue's identifier).
   */
  "id": string;
  /**
   * Relationships between the search result and other resources.
   */
  "relationships"?: IssuesSearchResultRelationships;
  /**
   * Type of the object.
   */
  "type": IssuesSearchResultType;

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
    attributes: {
      baseName: "attributes",
      type: "IssuesSearchResultAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IssuesSearchResultRelationships",
    },
    type: {
      baseName: "type",
      type: "IssuesSearchResultType",
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
    return IssuesSearchResult.attributeTypeMap;
  }

  public constructor() {}
}
