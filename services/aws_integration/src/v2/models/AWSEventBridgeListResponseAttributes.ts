import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSEventBridgeAccountConfiguration } from "./AWSEventBridgeAccountConfiguration";

/**
 * An object describing the EventBridge configuration for multiple accounts.
 */
export class AWSEventBridgeListResponseAttributes {
  /**
   * List of accounts with their event sources.
   */
  "accounts"?: Array<AWSEventBridgeAccountConfiguration>;
  /**
   * True if the EventBridge integration is enabled for your organization.
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
      baseName: "is_installed",
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
    return AWSEventBridgeListResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
