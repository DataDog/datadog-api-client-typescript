/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MonitorGroupSearchResponseCounts } from "./MonitorGroupSearchResponseCounts";
import { MonitorGroupSearchResult } from "./MonitorGroupSearchResult";
import { MonitorSearchResponseMetadata } from "./MonitorSearchResponseMetadata";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The response of a monitor group search.
 */

export class MonitorGroupSearchResponse {
  "counts"?: MonitorGroupSearchResponseCounts;
  /**
   * The list of found monitor groups.
   */
  "groups"?: Array<MonitorGroupSearchResult>;
  "metadata"?: MonitorSearchResponseMetadata;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    counts: {
      baseName: "counts",
      type: "MonitorGroupSearchResponseCounts",
    },
    groups: {
      baseName: "groups",
      type: "Array<MonitorGroupSearchResult>",
    },
    metadata: {
      baseName: "metadata",
      type: "MonitorSearchResponseMetadata",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorGroupSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
