/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AuditLogsEventAttributes } from "./AuditLogsEventAttributes";
import { AuditLogsEventType } from "./AuditLogsEventType";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Object description of an Audit Logs event after it is processed and stored by Datadog.
 */

export class AuditLogsEvent {
  "attributes"?: AuditLogsEventAttributes;
  /**
   * Unique ID of the event.
   */
  "id"?: string;
  "type"?: AuditLogsEventType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "AuditLogsEventAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AuditLogsEventType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuditLogsEvent.attributeTypeMap;
  }

  public constructor() {}
}
