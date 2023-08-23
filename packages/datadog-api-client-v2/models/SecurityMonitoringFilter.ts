/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringFilterAction } from "./SecurityMonitoringFilterAction";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The rule's suppression filter.
 */
export class SecurityMonitoringFilter {
  /**
   * The type of filtering action.
   */
  "action"?: SecurityMonitoringFilterAction;
  /**
   * Query for selecting logs to apply the filtering action.
   */
  "query"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    action: {
      type: "SecurityMonitoringFilterAction",
    },
    query: {
      type: "string",
    },
  };
}
