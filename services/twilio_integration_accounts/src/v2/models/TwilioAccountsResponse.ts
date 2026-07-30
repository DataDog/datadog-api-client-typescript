import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioAccountData } from "./TwilioAccountData";

/**
 * Response payload for a list of Twilio integration accounts.
 */
export class TwilioAccountsResponse {
  /**
   * List of Twilio integration accounts.
   */
  "data"?: Array<TwilioAccountData>;
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
      type: "Array<TwilioAccountData>",
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
    return TwilioAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
