/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssuesSearchResult } from "./IssuesSearchResult";
import { IssuesSearchResultIncluded } from "./IssuesSearchResultIncluded";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Search issues response payload.
 */
export class IssuesSearchResponse {
  /**
   * Array of results matching the search query.
   */
  "data"?: Array<IssuesSearchResult>;
  /**
   * Array of resources related to the search results.
   */
  "included"?: Array<IssuesSearchResultIncluded>;

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
    data: {
      baseName: "data",
      type: "Array<IssuesSearchResult>",
    },
    included: {
      baseName: "included",
      type: "Array<IssuesSearchResultIncluded>",
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
    return IssuesSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
