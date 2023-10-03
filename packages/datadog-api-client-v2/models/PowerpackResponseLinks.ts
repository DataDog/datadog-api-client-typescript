/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Links attributes.
 */
export class PowerpackResponseLinks {
  /**
   * Link to last page.
   */
  "first"?: string;
  /**
   * Link to first page.
   */
  "last"?: string;
  /**
   * Link for the next set of results.
   */
  "next"?: string;
  /**
   * Link for the previous set of results.
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
    return PowerpackResponseLinks.attributeTypeMap;
  }

  public constructor() {}
}
