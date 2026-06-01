/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Pagination links for the list rows response.
 */
export class ListRowsResponseLinks {
  /**
   * Link to the first page of results.
   */
  "first": string;
  /**
   * Link to the next page of results. Only present when more rows are available.
   */
  "next"?: string;
  /**
   * Link to the current page of results.
   */
  "self": string;

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
      required: true,
    },
    next: {
      baseName: "next",
      type: "string",
    },
    self: {
      baseName: "self",
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
    return ListRowsResponseLinks.attributeTypeMap;
  }

  public constructor() {}
}
