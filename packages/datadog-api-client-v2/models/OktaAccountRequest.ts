/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OktaAccount } from "./OktaAccount";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request object for an Okta account.
 */
export class OktaAccountRequest {
  /**
   * Schema for an Okta account.
   */
  "data": OktaAccount;

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
      type: "OktaAccount",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OktaAccountRequest.attributeTypeMap;
  }

  public constructor() {}
}
