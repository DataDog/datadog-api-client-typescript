/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageIncidentManagementHour } from "./UsageIncidentManagementHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the incident management usage for each hour for a given organization.
 */
export class UsageIncidentManagementResponse {
  /**
   * Get hourly usage for incident management.
   */
  "usage"?: Array<UsageIncidentManagementHour>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    usage: {
      type: "Array<UsageIncidentManagementHour>",
    },
  };
}
