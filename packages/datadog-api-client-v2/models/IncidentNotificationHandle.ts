/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A notification handle that will be notified at incident creation.
 */
export class IncidentNotificationHandle {
  /**
   * The name of the notified handle.
   */
  "displayName"?: string;
  /**
   * The email address used for the notification.
   */
  "handle"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    handle: {
      type: "string",
    },
  };
}
