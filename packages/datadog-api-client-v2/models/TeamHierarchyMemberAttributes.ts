/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Membership attributes relative to the requested team.
 */
export class TeamHierarchyMemberAttributes {
  /**
   * Role on the requested team: admin or member. Null for inherited members.
   */
  "directRole": string | null;
  /**
   * Whether the user belongs directly to the requested team.
   */
  "isDirect": boolean;
  /**
   * Membership provisioner. Null for inherited members.
   */
  "provisionedBy": string | null;
  /**
   * Identifier supplied by the membership provisioner. Null when unavailable or for inherited members.
   */
  "provisionedById": string | null;

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
    directRole: {
      baseName: "direct_role",
      type: "string",
      required: true,
    },
    isDirect: {
      baseName: "is_direct",
      type: "boolean",
      required: true,
    },
    provisionedBy: {
      baseName: "provisioned_by",
      type: "string",
      required: true,
    },
    provisionedById: {
      baseName: "provisioned_by_id",
      type: "string",
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
    return TeamHierarchyMemberAttributes.attributeTypeMap;
  }

  public constructor() {}
}
