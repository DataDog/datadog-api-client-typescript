/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorGroupSearchResponseCounts } from "./MonitorGroupSearchResponseCounts";
import { MonitorGroupSearchResult } from "./MonitorGroupSearchResult";
import { MonitorSearchResponseMetadata } from "./MonitorSearchResponseMetadata";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response of a monitor group search.
 */
export class MonitorGroupSearchResponse {
  /**
   * The counts of monitor groups per different criteria.
   */
  "counts"?: MonitorGroupSearchResponseCounts;
  /**
   * The list of found monitor groups.
   */
  "groups"?: Array<MonitorGroupSearchResult>;
  /**
   * Metadata about the response.
   */
  "metadata"?: MonitorSearchResponseMetadata;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
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

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorGroupSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
