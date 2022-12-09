/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageAnalyzedLogsHour } from "./UsageAnalyzedLogsHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A response containing the number of analyzed logs for each hour for a given organization.
 */
export class UsageAnalyzedLogsResponse {
  /**
   * Get hourly usage for analyzed logs.
   */
  "usage"?: Array<UsageAnalyzedLogsHour>;

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
      type: "Array<UsageAnalyzedLogsHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageAnalyzedLogsResponse.attributeTypeMap;
  }

  public constructor() {}
}
