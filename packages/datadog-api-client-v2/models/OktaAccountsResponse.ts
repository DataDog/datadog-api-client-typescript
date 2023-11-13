/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OktaAccount } from "./OktaAccount";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object for Okta accounts.
 */
export class OktaAccountsResponse {
  /**
   * List of Okta accounts.
   */
  "data"?: Array<OktaAccount>;

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
      type: "Array<OktaAccount>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OktaAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
