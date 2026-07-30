import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioAccountData } from "./TwilioAccountData";

/**
 * Response payload for a single Twilio integration account.
 */
export class TwilioAccountResponse {
  /**
   * Data envelope of a Twilio integration account, including server-assigned identity.
   */
  "data"?: TwilioAccountData;
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
      type: "TwilioAccountData",
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
    return TwilioAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
