/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TransportWebhookLogAttributes } from "./TransportWebhookLogAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single email transport webhook log event.
 */
export class TransportWebhookLog {
  /**
   * Top-level attributes for the webhook log event, including delivery status, recipient details, and provider metadata.
   */
  "attributes": TransportWebhookLogAttributes;
  /**
   * The ISO 8601 timestamp of the event.
   */
  "date": Date;
  /**
   * The unique log event identifier.
   */
  "logId": string;
  /**
   * The email transport provider.
   */
  "source": string;
  /**
   * The log status level.
   */
  "status": string;
  /**
   * A list of tags associated with the event.
   */
  "tags": Array<string>;

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
    attributes: {
      baseName: "attributes",
      type: "TransportWebhookLogAttributes",
      required: true,
    },
    date: {
      baseName: "date",
      type: "Date",
      required: true,
      format: "date-time",
    },
    logId: {
      baseName: "log_id",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
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
    return TransportWebhookLog.attributeTypeMap;
  }

  public constructor() {}
}
