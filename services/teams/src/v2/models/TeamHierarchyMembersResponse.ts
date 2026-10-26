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
   * Membership relationships for users who belong to the requested team or inherit membership through its descendant teams. Each user appears once, even if they belong to multiple teams in the hierarchy. Each relationship identifies the user and requested team, and indicates whether the user is a direct member of the requested team.
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
