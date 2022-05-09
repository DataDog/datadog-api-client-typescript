/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageAuditLogsHour } from "./UsageAuditLogsHour";

import { AttributeTypeMap } from "../util";

/**
 * Response containing the audit logs usage for each hour for a given organization.
 */
export class UsageAuditLogsResponse {
  /**
   * Get hourly usage for audit logs.
   */
  "usage"?: Array<UsageAuditLogsHour>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    usage: {
      baseName: "usage",
      type: "Array<UsageAuditLogsHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageAuditLogsResponse.attributeTypeMap;
  }

  public constructor() {}
}
