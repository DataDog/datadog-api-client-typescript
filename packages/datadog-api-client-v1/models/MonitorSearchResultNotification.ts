/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A notification triggered by the monitor.
 */
export class MonitorSearchResultNotification {
  /**
   * The email address that received the notification.
   */
  "handle"?: string;
  /**
   * The username receiving the notification
   */
  "name"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    handle: {
      type: "string",
    },
    name: {
      type: "string",
    },
  };
}
