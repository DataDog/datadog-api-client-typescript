/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Teams response links.
 */
export class TeamsResponseLinks {
  /**
   * First link.
   */
  "first"?: string;
  /**
   * Last link.
   */
  "last"?: string;
  /**
   * Next link.
   */
  "next"?: string;
  /**
   * Previous link.
   */
  "prev"?: string;
  /**
   * Current link.
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
}
