/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorSearchResponseCounts } from "./MonitorSearchResponseCounts";
import { MonitorSearchResponseMetadata } from "./MonitorSearchResponseMetadata";
import { MonitorSearchResult } from "./MonitorSearchResult";

import { AttributeTypeMap } from "../util";

/**
 * The response form a monitor search.
 */
export class MonitorSearchResponse {
  /**
   * The counts of monitors per different criteria.
   */
  "counts"?: MonitorSearchResponseCounts;
  /**
   * Metadata about the response.
   */
  "metadata"?: MonitorSearchResponseMetadata;
  /**
   * The list of found monitors.
   */
  "monitors"?: Array<MonitorSearchResult>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    counts: {
      baseName: "counts",
      type: "MonitorSearchResponseCounts",
    },
    metadata: {
      baseName: "metadata",
      type: "MonitorSearchResponseMetadata",
    },
    monitors: {
      baseName: "monitors",
      type: "Array<MonitorSearchResult>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
