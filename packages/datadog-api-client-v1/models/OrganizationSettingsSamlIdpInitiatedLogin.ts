/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Has one property enabled (boolean).
 */
export class OrganizationSettingsSamlIdpInitiatedLogin {
  /**
   * Whether SAML IdP initiated login is enabled, learn more
   * in the [SAML documentation](https://docs.datadoghq.com/account_management/saml/#idp-initiated-login).
   */
  "enabled"?: boolean;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OrganizationSettingsSamlIdpInitiatedLogin.attributeTypeMap;
  }

  public constructor() {}
}
