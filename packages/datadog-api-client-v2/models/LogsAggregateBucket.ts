/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsAggregateBucketValue } from "./LogsAggregateBucketValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A bucket values
 */
export class LogsAggregateBucket {
  /**
   * The key, value pairs for each group by
   */
  "by"?: { [key: string]: any };
  /**
   * A map of the metric name -> value for regular compute or list of values for a timeseries
   */
  "computes"?: { [key: string]: LogsAggregateBucketValue };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    by: {
      type: "{ [key: string]: any; }",
    },
    computes: {
      type: "{ [key: string]: LogsAggregateBucketValue; }",
    },
  };
}
