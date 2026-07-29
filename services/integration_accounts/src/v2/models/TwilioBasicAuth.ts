import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioBasicAuthType } from "./TwilioBasicAuthType";

/**
 * API Key & Secret authentication for Twilio.
 */
export class TwilioBasicAuth {
  /**
   * Twilio API Key SID for authentication. Create from Twilio Console > Account > API Keys & Tokens.
   */
  "apiKey": string;
  /**
   * Twilio API Key Secret (token) corresponding to the API Key SID.
   */
  "apiKeyToken": string;
  /**
   * Authentication method discriminator.
   */
  "type": TwilioBasicAuthType;
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
    apiKey: {
      baseName: "api_key",
      type: "string",
      required: true,
    },
    apiKeyToken: {
      baseName: "api_key_token",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TwilioBasicAuthType",
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
    return TwilioBasicAuth.attributeTypeMap;
  }

  public constructor() {}
}
