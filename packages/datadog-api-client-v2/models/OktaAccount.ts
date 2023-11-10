/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OktaAccountAttributes } from "./OktaAccountAttributes";
import { OktaAccountType } from "./OktaAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema for an Okta account.
 */
export class OktaAccount {
  /**
   * Attributes object for an Okta account.
   */
  "attributes": OktaAccountAttributes;
  /**
   * The ID of the Okta account, a UUID hash of the account name.
   */
  "id": string;
  /**
   * Account type for an Okta account.
   */
  "type": OktaAccountType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "OktaAccountAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OktaAccountType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OktaAccount.attributeTypeMap;
  }

  public constructor() {}
}
