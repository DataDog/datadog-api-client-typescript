/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricSearchResponseResults } from "./MetricSearchResponseResults";

import { AttributeTypeMap } from "../util";

/**
 * Object containing the list of metrics matching the search query.
 */
export class MetricSearchResponse {
  /**
   * Search result.
   */
  "results"?: MetricSearchResponseResults;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    results: {
      baseName: "results",
      type: "MetricSearchResponseResults",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
