/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Has one property enabled (boolean).
 */

export class OrganizationSettingsSamlStrictMode {
  /**
   * Whether or not the SAML strict mode is enabled. If true, all users must log in with SAML. Learn more on the [SAML Strict documentation](https://docs.datadoghq.com/account_management/saml/#saml-strict).
   */
  "enabled"?: boolean;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    enabled: {
      baseName: "enabled",
      type: "boolean",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return OrganizationSettingsSamlStrictMode.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): OrganizationSettingsSamlStrictMode {
    const res = new OrganizationSettingsSamlStrictMode();

    res.enabled = ObjectSerializer.deserialize(data.enabled, "boolean", "");

    return res;
  }

  static serialize(
    data: OrganizationSettingsSamlStrictMode
  ): { [key: string]: any } {
    const attributeTypes = OrganizationSettingsSamlStrictMode.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.enabled = ObjectSerializer.serialize(data.enabled, "boolean", "");

    return res;
  }

  public constructor() {}
}
