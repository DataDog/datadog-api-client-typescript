/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Asset risks.
 */
export class AssetRisks {
  /**
   * Whether the asset has access to sensitive data or not.
   */
  "hasAccessToSensitiveData"?: boolean;
  /**
   * Whether the asset has privileged access or not.
   */
  "hasPrivilegedAccess"?: boolean;
  /**
   * Whether the asset is in production or not.
   */
  "inProduction": boolean;
  /**
   * Whether the asset is publicly accessible or not.
   */
  "isPubliclyAccessible"?: boolean;
  /**
   * Whether the asset is under attack or not.
   */
  "underAttack"?: boolean;

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
    hasAccessToSensitiveData: {
      baseName: "has_access_to_sensitive_data",
      type: "boolean",
    },
    hasPrivilegedAccess: {
      baseName: "has_privileged_access",
      type: "boolean",
    },
    inProduction: {
      baseName: "in_production",
      type: "boolean",
      required: true,
    },
    isPubliclyAccessible: {
      baseName: "is_publicly_accessible",
      type: "boolean",
    },
    underAttack: {
      baseName: "under_attack",
      type: "boolean",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AssetRisks.attributeTypeMap;
  }

  public constructor() {}
}
