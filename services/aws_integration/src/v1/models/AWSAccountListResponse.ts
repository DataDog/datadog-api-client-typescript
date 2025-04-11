import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSAccount } from "./AWSAccount";

/**
 * List of enabled AWS accounts.
 */
export class AWSAccountListResponse {
  /**
   * List of enabled AWS accounts.
   */
  "accounts"?: Array<AWSAccount>;
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
    accounts: {
      baseName: "accounts",
      type: "Array<AWSAccount>",
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
    return AWSAccountListResponse.attributeTypeMap;
  }

  public constructor() {}
}
