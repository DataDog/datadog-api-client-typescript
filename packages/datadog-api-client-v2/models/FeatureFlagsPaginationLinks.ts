/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Pagination links. Follow `next` with the same authentication to retrieve the next page. Links use `page[limit]` and `page[offset]` and preserve the filters. Navigation links are omitted when not applicable.
 */
export class FeatureFlagsPaginationLinks {
  /**
   * Link to the first page.
   */
  "first"?: string;
  /**
   * Link to the last page.
   */
  "last"?: string;
  /**
   * Link to the next page, when available.
   */
  "next"?: string;
  /**
   * Link to the previous page, when available.
   */
  "prev"?: string;
  /**
   * Link to the current page.
   */
  "self"?: string;

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FeatureFlagsPaginationLinks.attributeTypeMap;
  }

  public constructor() {}
}
