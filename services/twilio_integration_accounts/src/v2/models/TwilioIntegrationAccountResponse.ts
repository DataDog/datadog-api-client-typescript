import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioIntegrationAccountData } from "./TwilioIntegrationAccountData";

/**
 * Response payload for a single Twilio integration account.
 */
export class TwilioIntegrationAccountResponse {
  /**
   * Data envelope of a Twilio integration account, including server-assigned identity.
   */
  "data"?: TwilioIntegrationAccountData;
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
    data: {
      baseName: "data",
      type: "TwilioIntegrationAccountData",
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
    return TwilioIntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
