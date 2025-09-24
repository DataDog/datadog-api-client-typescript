import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BillConfig } from "./BillConfig";

/**
 * Attributes for Azure config Post Request.
 */
export class AzureUCConfigPostRequestAttributes {
  /**
   * The tenant ID of the Azure account.
   */
  "accountId": string;
  /**
   * Bill config.
   */
  "actualBillConfig": BillConfig;
  /**
   * Bill config.
   */
  "amortizedBillConfig": BillConfig;
  /**
   * The client ID of the Azure account.
   */
  "clientId": string;
  /**
   * The scope of your observed subscription.
   */
  "scope": string;
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
    accountId: {
      baseName: "account_id",
      type: "string",
      required: true,
    },
    actualBillConfig: {
      baseName: "actual_bill_config",
      type: "BillConfig",
      required: true,
    },
    amortizedBillConfig: {
      baseName: "amortized_bill_config",
      type: "BillConfig",
      required: true,
    },
    clientId: {
      baseName: "client_id",
      type: "string",
      required: true,
    },
    scope: {
      baseName: "scope",
      type: "string",
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
    return AzureUCConfigPostRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
