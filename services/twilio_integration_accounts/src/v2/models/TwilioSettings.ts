import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Twilio interface settings.
 */
export class TwilioSettings {
  /**
   * Twilio Account SID that uniquely identifies your Twilio account.
   */
  "accountSid": string;
  /**
   * When enabled, phone numbers in the `to` field and SMS message bodies are censored for privacy.
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
    return TwilioSettings.attributeTypeMap;
  }

  public constructor() {}
}
