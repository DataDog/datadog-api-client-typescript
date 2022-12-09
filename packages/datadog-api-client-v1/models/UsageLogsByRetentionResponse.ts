/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageLogsByRetentionHour } from "./UsageLogsByRetentionHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the indexed logs usage broken down by retention period for an organization during a given hour.
 */
export class UsageLogsByRetentionResponse {
  /**
   * Get hourly usage for indexed logs by retention period.
   */
  "usage"?: Array<UsageLogsByRetentionHour>;

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
      type: "Array<UsageLogsByRetentionHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageLogsByRetentionResponse.attributeTypeMap;
  }

  public constructor() {}
}
