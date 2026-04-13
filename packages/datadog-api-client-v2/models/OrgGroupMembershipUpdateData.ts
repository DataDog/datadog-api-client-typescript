/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgGroupMembershipType } from "./OrgGroupMembershipType";
import { OrgGroupMembershipUpdateRelationships } from "./OrgGroupMembershipUpdateRelationships";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for updating an org group membership.
 */
export class OrgGroupMembershipUpdateData {
  /**
   * The ID of the membership.
   */
  "id": string;
  /**
   * Relationships for updating a membership.
   */
  "relationships": OrgGroupMembershipUpdateRelationships;
  /**
   * Org group memberships resource type.
   */
  "type": OrgGroupMembershipType;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "OrgGroupMembershipUpdateRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrgGroupMembershipType",
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
    return OrgGroupMembershipUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
