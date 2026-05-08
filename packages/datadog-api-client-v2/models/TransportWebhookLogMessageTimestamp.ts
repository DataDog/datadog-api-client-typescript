/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The message delivery timing information.
 */
export class TransportWebhookLogMessageTimestamp {
  /**
   * The Unix timestamp of the event.
   */
  "eventTimestamp"?: number;
  /**
   * The total delivery time in seconds.
   */
  "lifetime"?: number;
  /**
   * Number of seconds the message spent in the delivery queue.
   */
  "queueTime"?: number;
  /**
   * The scheduled delivery time as a Unix timestamp.
   */
  "scheduledTime"?: number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    eventTimestamp: {
      baseName: "event_timestamp",
      type: "number",
      format: "double",
    },
    lifetime: {
      baseName: "lifetime",
      type: "number",
      format: "double",
    },
    queueTime: {
      baseName: "queue_time",
      type: "number",
      format: "double",
    },
    scheduledTime: {
      baseName: "scheduled_time",
      type: "number",
      format: "double",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TransportWebhookLogMessageTimestamp.attributeTypeMap;
  }

  public constructor() {}
}
