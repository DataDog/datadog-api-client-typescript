/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings configured on the Twilio integration account.
 */
export class TwilioIntegrationAccountSettingsResponse {
  /**
   * Twilio Account SID that uniquely identifies your Twilio account.
   */
  "accountSid": string;
  /**
   * When enabled, Twilio phone numbers in the `to` field and SMS message bodies are censored for privacy.
   */
  "censorLogs"?: boolean;

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
    accountSid: {
      baseName: "account_sid",
      type: "string",
      required: true,
    },
    censorLogs: {
      baseName: "censor_logs",
      type: "boolean",
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
    return TwilioIntegrationAccountSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
