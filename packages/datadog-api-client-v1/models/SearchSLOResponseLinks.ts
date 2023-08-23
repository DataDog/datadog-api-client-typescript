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
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    first: {
      type: "string",
    },
    last: {
      type: "string",
    },
    next: {
      type: "string",
    },
    prev: {
      type: "string",
    },
    self: {
      type: "string",
    },
  };
}
