/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Read-only permission information for the account, derived from its restriction policy.
 */
export class IntegrationAccountPermissions {
  /**
   * Restriction-policy resource identifier of this account.
   */
  "resourceId"?: string;
  /**
   * Whether the requesting user may edit this account.
   */
  "userCanEdit"?: boolean;

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
    resourceId: {
      baseName: "resource_id",
      type: "string",
    },
    userCanEdit: {
      baseName: "user_can_edit",
      type: "boolean",
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
    return IntegrationAccountPermissions.attributeTypeMap;
  }

  public constructor() {}
}
