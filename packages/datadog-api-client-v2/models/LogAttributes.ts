/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON object containing all log attributes and their associated values.
 */
export class LogAttributes {
  /**
   * JSON object of attributes from your log.
   */
  "attributes"?: { [key: string]: any };
  /**
   * Name of the machine from where the logs are being sent.
   */
  "host"?: string;
  /**
   * The message [reserved attribute](https://docs.datadoghq.com/logs/log_collection/#reserved-attributes)
   * of your log. By default, Datadog ingests the value of the message attribute as the body of the log entry.
   * That value is then highlighted and displayed in the Logstream, where it is indexed for full text search.
   */
  "message"?: string;
  /**
   * The name of the application or service generating the log events.
   * It is used to switch from Logs to APM, so make sure you define the same
   * value when you use both products.
   */
  "service"?: string;
  /**
   * Status of the message associated with your log.
   */
  "status"?: string;
  /**
   * Array of tags associated with your log.
   */
  "tags"?: Array<string>;
  /**
   * Timestamp of your log.
   */
  "timestamp"?: Date;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "{ [key: string]: any; }",
    },
    host: {
      baseName: "host",
      type: "string",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    timestamp: {
      baseName: "timestamp",
      type: "Date",
      format: "date-time",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogAttributes.attributeTypeMap;
  }

  public constructor() {}
}
