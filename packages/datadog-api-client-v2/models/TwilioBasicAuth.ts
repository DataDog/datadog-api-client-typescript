/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TwilioBasicAuthType } from "./TwilioBasicAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
