import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyMember } from "./TeamHierarchyMember";
import { TeamHierarchyMemberIncluded } from "./TeamHierarchyMemberIncluded";
import { TeamHierarchyMembersResponseLinks } from "./TeamHierarchyMembersResponseLinks";
import { TeamHierarchyMembersResponseMeta } from "./TeamHierarchyMembersResponseMeta";

/**
 * Direct and inherited members of the requested team.
 */
export class TeamHierarchyMembersResponse {
  /**
   * One relationship per user.
   */
  "data": Array<TeamHierarchyMember>;
  /**
   * Requested users and the team. May be absent when the result is empty, even if requested.
   */
  "included"?: Array<TeamHierarchyMemberIncluded>;
  /**
   * Page navigation links. Unavailable links are omitted.
   */
  "links": TeamHierarchyMembersResponseLinks;
  /**
   * Pagination metadata for the filtered members.
   */
  "meta": TeamHierarchyMembersResponseMeta;
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
      type: "Array<TeamHierarchyMember>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<TeamHierarchyMemberIncluded>",
    },
    links: {
      baseName: "links",
      type: "TeamHierarchyMembersResponseLinks",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "TeamHierarchyMembersResponseMeta",
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
    return TeamHierarchyMembersResponse.attributeTypeMap;
  }

  public constructor() {}
}
