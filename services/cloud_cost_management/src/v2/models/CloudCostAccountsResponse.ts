import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudCostAccount } from "./CloudCostAccount";

/**
 * List of cloud cost accounts.
 */
export class CloudCostAccountsResponse {
  /**
   * The cloud cost accounts matching the filter.
   */
  "data": Array<CloudCostAccount>;
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
      type: "Array<CloudCostAccount>",
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
    return CloudCostAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
