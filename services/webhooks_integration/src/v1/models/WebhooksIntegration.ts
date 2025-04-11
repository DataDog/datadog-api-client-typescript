import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebhooksIntegrationEncoding } from "./WebhooksIntegrationEncoding";

/**
 * Datadog-Webhooks integration.
 */
export class WebhooksIntegration {
  /**
   * If `null`, uses no header.
   * If given a JSON payload, these will be headers attached to your webhook.
   */
  "customHeaders"?: string;
  /**
   * Encoding type. Can be given either `json` or `form`.
   */
  "encodeAs"?: WebhooksIntegrationEncoding;
  /**
   * The name of the webhook. It corresponds with `<WEBHOOK_NAME>`.
   * Learn more on how to use it in
   * [monitor notifications](https://docs.datadoghq.com/monitors/notify).
   */
  "name": string;
  /**
   * If `null`, uses the default payload.
   * If given a JSON payload, the webhook returns the payload
   * specified by the given payload.
   * [Webhooks variable usage](https://docs.datadoghq.com/integrations/webhooks/#usage).
   */
  "payload"?: string;
  /**
   * URL of the webhook.
   */
  "url": string;
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
    customHeaders: {
      baseName: "custom_headers",
      type: "string",
    },
    encodeAs: {
      baseName: "encode_as",
      type: "WebhooksIntegrationEncoding",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    payload: {
      baseName: "payload",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
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
    return WebhooksIntegration.attributeTypeMap;
  }

  public constructor() {}
}
