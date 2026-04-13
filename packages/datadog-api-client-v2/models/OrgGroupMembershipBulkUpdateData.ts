/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgGroupMembershipBulkUpdateAttributes } from "./OrgGroupMembershipBulkUpdateAttributes";
import { OrgGroupMembershipBulkUpdateRelationships } from "./OrgGroupMembershipBulkUpdateRelationships";
import { OrgGroupMembershipBulkUpdateType } from "./OrgGroupMembershipBulkUpdateType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for bulk updating org group memberships.
 */
export class OrgGroupMembershipBulkUpdateData {
  /**
   * Attributes for bulk updating org group memberships.
   */
  "attributes": OrgGroupMembershipBulkUpdateAttributes;
  /**
   * Relationships for bulk updating memberships.
   */
  "relationships": OrgGroupMembershipBulkUpdateRelationships;
  /**
   * Org group membership bulk update resource type.
   */
  "type": OrgGroupMembershipBulkUpdateType;

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
      type: "OrgGroupMembershipBulkUpdateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "OrgGroupMembershipBulkUpdateRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrgGroupMembershipBulkUpdateType",
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
    return OrgGroupMembershipBulkUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
