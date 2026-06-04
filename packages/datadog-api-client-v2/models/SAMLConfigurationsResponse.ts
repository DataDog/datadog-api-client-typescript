/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Role } from "./Role";
import { SAMLConfiguration } from "./SAMLConfiguration";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of SAML configurations.
 */
export class SAMLConfigurationsResponse {
  /**
   * Array of SAML configurations. An organization has at most one SAML configuration.
   */
  "data"?: Array<SAMLConfiguration>;
  /**
   * Resources related to the SAML configurations, such as the default roles.
   */
  "included"?: Array<Role>;

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
    data: {
      baseName: "data",
      type: "Array<SAMLConfiguration>",
    },
    included: {
      baseName: "included",
      type: "Array<Role>",
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
    return SAMLConfigurationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
