/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration risks associated with the entity
 */
export class SecurityEntityConfigRisks {
  /**
   * Whether the entity has identity risks
   */
  "hasIdentityRisk": boolean;
  /**
   * Whether the entity has misconfigurations
   */
  "hasMisconfiguration": boolean;
  /**
   * Whether the entity has privileged roles
   */
  "hasPrivilegedRole": boolean;
  /**
   * Whether the entity has privileged access
   */
  "isPrivileged": boolean;
  /**
   * Whether the entity is in a production environment
   */
  "isProduction": boolean;
  /**
   * Whether the entity is publicly accessible
   */
  "isPubliclyAccessible": boolean;

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
    hasIdentityRisk: {
      baseName: "hasIdentityRisk",
      type: "boolean",
      required: true,
    },
    hasMisconfiguration: {
      baseName: "hasMisconfiguration",
      type: "boolean",
      required: true,
    },
    hasPrivilegedRole: {
      baseName: "hasPrivilegedRole",
      type: "boolean",
      required: true,
    },
    isPrivileged: {
      baseName: "isPrivileged",
      type: "boolean",
      required: true,
    },
    isProduction: {
      baseName: "isProduction",
      type: "boolean",
      required: true,
    },
    isPubliclyAccessible: {
      baseName: "isPubliclyAccessible",
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
    return SecurityEntityConfigRisks.attributeTypeMap;
  }

  public constructor() {}
}
