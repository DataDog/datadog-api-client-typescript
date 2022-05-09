/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBrowserTestResultShort } from "./SyntheticsBrowserTestResultShort";

import { AttributeTypeMap } from "../util";

/**
 * Object with the latest Synthetic browser test run.
 */
export class SyntheticsGetBrowserTestLatestResultsResponse {
  /**
   * Timestamp of the latest browser test run.
   */
  "lastTimestampFetched"?: number;
  /**
   * Result of the latest browser test run.
   */
  "results"?: Array<SyntheticsBrowserTestResultShort>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    lastTimestampFetched: {
      baseName: "last_timestamp_fetched",
      type: "number",
      format: "int64",
    },
    results: {
      baseName: "results",
      type: "Array<SyntheticsBrowserTestResultShort>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsGetBrowserTestLatestResultsResponse.attributeTypeMap;
  }

  public constructor() {}
}
