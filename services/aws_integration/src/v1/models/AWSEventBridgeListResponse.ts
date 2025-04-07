import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSEventBridgeAccountConfiguration } from "./AWSEventBridgeAccountConfiguration";

/**
 * An object describing the EventBridge configuration for multiple accounts.
 */
export class AWSEventBridgeListResponse {
  /**
   * List of accounts with their event sources.
   */
  "accounts"?: Array<AWSEventBridgeAccountConfiguration>;
  /**
   * True if the EventBridge sub-integration is enabled for your organization.
   */
  "isInstalled"?: boolean;
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
      type: "Array<AWSEventBridgeAccountConfiguration>",
    },
    isInstalled: {
      baseName: "isInstalled",
      type: "boolean",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSEventBridgeListResponse.attributeTypeMap;
  }

  public constructor() {}
}
