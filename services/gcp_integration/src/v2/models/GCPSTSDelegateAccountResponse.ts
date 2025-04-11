import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPSTSDelegateAccount } from "./GCPSTSDelegateAccount";

/**
 * Your delegate service account response data.
 */
export class GCPSTSDelegateAccountResponse {
  /**
   * Datadog principal service account info.
   */
  "data"?: GCPSTSDelegateAccount;
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
      type: "GCPSTSDelegateAccount",
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
    return GCPSTSDelegateAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
