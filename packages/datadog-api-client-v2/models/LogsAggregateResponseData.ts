/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsAggregateBucket } from "./LogsAggregateBucket";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The query results
 */
export class LogsAggregateResponseData {
  /**
   * The list of matching buckets, one item per bucket
   */
  "buckets"?: Array<LogsAggregateBucket>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    buckets: {
      baseName: "buckets",
      type: "Array<LogsAggregateBucket>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsAggregateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
