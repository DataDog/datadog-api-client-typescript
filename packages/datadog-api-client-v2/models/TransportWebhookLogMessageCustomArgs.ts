/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Custom arguments passed through the email transport provider for tracking.
 */
export class TransportWebhookLogMessageCustomArgs {
  /**
   * The unique email identifier.
   */
  "emailId"?: string;
  /**
   * The human-readable email type name.
   */
  "emailTypeDisplayName"?: string;
  /**
   * The organization UUID.
   */
  "orgUuid"?: string;
  /**
   * The timestamp when the email was queued.
   */
  "queueTime"?: string;
  /**
   * The email subject line.
   */
  "subject"?: string;

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
    emailId: {
      baseName: "email_id",
      type: "string",
    },
    emailTypeDisplayName: {
      baseName: "email_type_display_name",
      type: "string",
    },
    orgUuid: {
      baseName: "org_uuid",
      type: "string",
    },
    queueTime: {
      baseName: "queue_time",
      type: "string",
    },
    subject: {
      baseName: "subject",
      type: "string",
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
    return TransportWebhookLogMessageCustomArgs.attributeTypeMap;
  }

  public constructor() {}
}
