/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgGroupMembershipAttributes } from "./OrgGroupMembershipAttributes";
import { OrgGroupMembershipRelationships } from "./OrgGroupMembershipRelationships";
import { OrgGroupMembershipType } from "./OrgGroupMembershipType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An org group membership resource.
 */
export class OrgGroupMembershipData {
  /**
   * Attributes of an org group membership.
   */
  "attributes": OrgGroupMembershipAttributes;
  /**
   * The ID of the org group membership.
   */
  "id": string;
  /**
   * Relationships of an org group membership.
   */
  "relationships"?: OrgGroupMembershipRelationships;
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
    attributes: {
      baseName: "attributes",
      type: "OrgGroupMembershipAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "OrgGroupMembershipRelationships",
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
    return OrgGroupMembershipData.attributeTypeMap;
  }

  public constructor() {}
}
