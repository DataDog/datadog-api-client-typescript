/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an organization identity provider.
 */
export class IdentityProviderAttributes {
  /**
   * The authentication method used by this identity provider.
   */
  "authenticationMethod": string;
  /**
   * Whether this identity provider is enabled for the organization.
   */
  "enabled": boolean;

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
    authenticationMethod: {
      baseName: "authentication_method",
      type: "string",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
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
    return IdentityProviderAttributes.attributeTypeMap;
  }

  public constructor() {}
}
