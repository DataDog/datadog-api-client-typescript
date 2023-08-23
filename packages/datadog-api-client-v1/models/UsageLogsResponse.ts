/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageLogsHour } from "./UsageLogsHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the number of logs for each hour.
 */
export class UsageLogsResponse {
  /**
   * An array of objects regarding hourly usage of logs.
   */
  "usage"?: Array<UsageLogsHour>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    usage: {
      baseName: "usage",
      type: "Array<UsageLogsHour>",
    },
  };
}
