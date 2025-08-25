/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSEventBridgeAccountConfiguration } from "./AWSEventBridgeAccountConfiguration";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
