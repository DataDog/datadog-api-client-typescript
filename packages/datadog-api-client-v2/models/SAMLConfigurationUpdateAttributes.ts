/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for updating a SAML configuration.
 */
export class SAMLConfigurationUpdateAttributes {
  /**
   * Whether identity-provider-initiated login is enabled for the organization.
   */
  "idpInitiated"?: boolean;
  /**
   * Email domains for which users are automatically provisioned on first SAML login
   * (just-in-time provisioning). A default role is required to enable just-in-time provisioning.
   */
  "jitDomains"?: Array<string>;

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
    idpInitiated: {
      baseName: "idp_initiated",
      type: "boolean",
    },
    jitDomains: {
      baseName: "jit_domains",
      type: "Array<string>",
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
    return SAMLConfigurationUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
