/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON object containing all event attributes and their associated values.
 */
export class AuditLogsEventAttributes {
  /**
   * JSON object of attributes from Audit Logs events.
   */
  "attributes"?: { [key: string]: any };
  /**
   * Message of the event.
   */
  "message"?: string;
  /**
   * Name of the application or service generating Audit Logs events.
   * This name is used to correlate Audit Logs to APM, so make sure you specify the same
   * value when you use both products.
   */
  "service"?: string;
  /**
   * Array of tags associated with your event.
   */
  "tags"?: Array<string>;
  /**
   * Timestamp of your event.
   */
  "timestamp"?: Date;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "{ [key: string]: any; }",
    },
    message: {
      type: "string",
    },
    service: {
      type: "string",
    },
    tags: {
      type: "Array<string>",
    },
    timestamp: {
      type: "Date",
      format: "date-time",
    },
  };
}
