/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Pagination links.
 */
export class SearchSLOResponseLinks {
  /**
   * Link to last page.
   */
  "first"?: string;
  /**
   * Link to first page.
   */
  "last"?: string;
  /**
   * Link to the next page.
   */
  "next"?: string;
  /**
   * Link to previous page.
   */
  "prev"?: string;
  /**
   * Link to current page.
   */
  "self"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    first: {
      baseName: "first",
      type: "string",
    },
    last: {
      baseName: "last",
      type: "string",
    },
    next: {
      baseName: "next",
      type: "string",
    },
    prev: {
      baseName: "prev",
      type: "string",
    },
    self: {
      baseName: "self",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SearchSLOResponseLinks.attributeTypeMap;
  }

  public constructor() {}
}
