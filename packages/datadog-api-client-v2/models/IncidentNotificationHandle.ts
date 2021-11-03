/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
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

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    handle: {
      baseName: "handle",
      type: "string",
    },
  };

  static getAttributeTypeMap() {
    return IncidentNotificationHandle.attributeTypeMap;
  }

  public constructor() {}
}
