import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TransportWebhookLogEmail } from "./TransportWebhookLogEmail";
import { TransportWebhookLogMessage } from "./TransportWebhookLogMessage";
import { TransportWebhookLogNetwork } from "./TransportWebhookLogNetwork";
import { TransportWebhookLogOrgMetadata } from "./TransportWebhookLogOrgMetadata";

/**
 * Top-level attributes for the webhook log event, including delivery status, recipient details, and provider metadata.
 */
export class TransportWebhookLogAttributes {
  /**
   * The event categories.
   */
  "category"?: Array<string>;
  /**
   * The email address details.
   */
  "email"?: TransportWebhookLogEmail;
  /**
   * The unique email identifier.
   */
  "emailId"?: string;
  /**
   * The human-readable email type name.
   */
  "emailTypeDisplayName"?: string;
  /**
   * The message delivery event details.
   */
  "message"?: TransportWebhookLogMessage;
  /**
   * The network information for the event.
   */
  "network"?: TransportWebhookLogNetwork;
  /**
   * The numeric organization identifier.
   */
  "org"?: number;
  /**
   * Metadata about the organization that sent the email.
   */
  "orgMetadata"?: TransportWebhookLogOrgMetadata;
  /**
   * The organization UUID.
   */
  "orgUuid"?: string;
  /**
   * The timestamp when the email was queued.
   */
  "queueTime"?: string;
  /**
   * Indicates whether the open event was triggered by automated machine activity rather than a human recipient (SendGrid-specific).
   */
  "sgMachineOpen"?: boolean;
  /**
   * The email subject line.
   */
  "subject"?: string;
  /**
   * The user agent string for open events.
   */
  "useragent"?: string;
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
    category: {
      baseName: "category",
      type: "Array<string>",
    },
    email: {
      baseName: "email",
      type: "TransportWebhookLogEmail",
    },
    emailId: {
      baseName: "email_id",
      type: "string",
    },
    emailTypeDisplayName: {
      baseName: "email_type_display_name",
      type: "string",
    },
    message: {
      baseName: "message",
      type: "TransportWebhookLogMessage",
    },
    network: {
      baseName: "network",
      type: "TransportWebhookLogNetwork",
    },
    org: {
      baseName: "org",
      type: "number",
      format: "int64",
    },
    orgMetadata: {
      baseName: "org_metadata",
      type: "TransportWebhookLogOrgMetadata",
    },
    orgUuid: {
      baseName: "org_uuid",
      type: "string",
    },
    queueTime: {
      baseName: "queue_time",
      type: "string",
    },
    sgMachineOpen: {
      baseName: "sg_machine_open",
      type: "boolean",
    },
    subject: {
      baseName: "subject",
      type: "string",
    },
    useragent: {
      baseName: "useragent",
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
    return TransportWebhookLogAttributes.attributeTypeMap;
  }

  public constructor() {}
}
