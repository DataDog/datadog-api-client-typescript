import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatuspageAccountResponseData } from "./StatuspageAccountResponseData";

/**
 * Response containing a Statuspage account.
 */
export class StatuspageAccountResponse {
  /**
   * Statuspage account data from a response.
   */
  "data": StatuspageAccountResponseData;
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
      type: "StatuspageAccountResponseData",
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
    return StatuspageAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
