/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Has two properties, `enabled` (boolean) and `domains`, which is a list of domains without the @ symbol.
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

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    domains: {
      baseName: "domains",
      type: "Array<string>",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OrganizationSettingsSamlAutocreateUsersDomains.attributeTypeMap;
  }

  public constructor() {}
}
