/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SplitVectorTagFilter {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "tagKey": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "tagValues": Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    tagKey: {
      baseName: "tag_key",
      type: "string",
      required: true,
    },
    tagValues: {
      baseName: "tag_values",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SplitVectorTagFilter.attributeTypeMap;
  }

  public constructor() {}
}
