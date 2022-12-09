/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Paging attributes.
 */
export class CIAppResponsePage {
  /**
   * The cursor to use to get the next results, if any. To make the next request, use the same parameters with the addition of `page[cursor]`.
   */
  "after"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    after: {
      baseName: "after",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CIAppResponsePage.attributeTypeMap;
  }

  public constructor() {}
}
