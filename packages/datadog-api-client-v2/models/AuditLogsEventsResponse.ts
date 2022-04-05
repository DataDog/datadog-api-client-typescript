/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AuditLogsEvent } from "./AuditLogsEvent";
import { AuditLogsResponseLinks } from "./AuditLogsResponseLinks";
import { AuditLogsResponseMetadata } from "./AuditLogsResponseMetadata";
import { AttributeTypeMap } from "../util";

/**
 * Response object with all events matching the request and pagination information.
 */

export class AuditLogsEventsResponse {
  /**
   * Array of events matching the request.
   */
  "data"?: Array<AuditLogsEvent>;
  "links"?: AuditLogsResponseLinks;
  "meta"?: AuditLogsResponseMetadata;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<AuditLogsEvent>",
    },
    links: {
      baseName: "links",
      type: "AuditLogsResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "AuditLogsResponseMetadata",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuditLogsEventsResponse.attributeTypeMap;
  }

  public constructor() {}
}
