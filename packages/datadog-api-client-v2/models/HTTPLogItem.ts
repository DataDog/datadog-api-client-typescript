/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Logs that are sent over HTTP.
 */
export class HTTPLogItem {
  /**
   * The integration name associated with your log: the technology from which the log originated.
   * When it matches an integration name, Datadog automatically installs the corresponding parsers and facets.
   * See [reserved attributes](https://docs.datadoghq.com/logs/log_configuration/attributes_naming_convention/#reserved-attributes).
   */
  "ddsource"?: string;
  /**
   * Tags associated with your logs.
   */
  "ddtags"?: string;
  /**
   * The name of the originating host of the log.
   */
  "hostname"?: string;
  /**
   * The message [reserved attribute](https://docs.datadoghq.com/logs/log_configuration/attributes_naming_convention/#reserved-attributes)
   * of your log. By default, Datadog ingests the value of the message attribute as the body of the log entry. That value is then highlighted and displayed in the Logstream, where it is indexed for full text search.
   * - Messages truncate to 25 KiB for non-message fields, and 75 KiB for the message field.
   * - Queries match against the truncated version.
   * - The truncated version displays only when doing a grouped query, for example, logs grouped by that truncated field or similar operations that display that specific field.
   * - Datadog stores the full text for the fields, and you can see the full log in regular list queries in the Logs Explorer.
   */
  "message": string;
  /**
   * The name of the application or service generating the log events.
   * It is used to switch from Logs to APM, so make sure you define the same value when you use both products.
   * See [reserved attributes](https://docs.datadoghq.com/logs/log_configuration/attributes_naming_convention/#reserved-attributes).
   */
  "service"?: string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: string };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    ddsource: {
      baseName: "ddsource",
      type: "string",
    },
    ddtags: {
      baseName: "ddtags",
      type: "string",
    },
    hostname: {
      baseName: "hostname",
      type: "string",
    },
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    service: {
      baseName: "service",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HTTPLogItem.attributeTypeMap;
  }

  public constructor() {}
}
