/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class OrganizationSettingsSamlAutocreateUsersDomains {
  /**
   * List of domains where the SAML automated user creation is enabled.
   */
  "domains"?: Array<string>;
  /**
   * Whether or not the automated user creation based on SAML domain is enabled.
   */
  "enabled"?: boolean;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    domains: {
      baseName: "domains",
      type: "Array<string>",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
  };

  static getAttributeTypeMap() {
    return OrganizationSettingsSamlAutocreateUsersDomains.attributeTypeMap;
  }

  public constructor() {}
}
