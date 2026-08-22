/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings for updating the Twilio integration account. Only the fields provided are changed.
 */
export class TwilioIntegrationAccountSettingsUpdate {
  /**
   * Twilio Account SID that uniquely identifies your Twilio account.
   */
  "accountSid"?: string;
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
    return TwilioIntegrationAccountSettingsUpdate.attributeTypeMap;
  }

  public constructor() {}
}
