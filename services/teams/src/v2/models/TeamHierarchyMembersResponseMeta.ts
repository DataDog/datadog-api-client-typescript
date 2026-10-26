import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyMembersPage } from "./TeamHierarchyMembersPage";

/**
 * Pagination metadata for the filtered members.
 */
export class TeamHierarchyMembersResponseMeta {
  /**
   * Pagination metadata for the selected pagination mode.
   */
  "page": TeamHierarchyMembersPage;
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
    page: {
      baseName: "page",
      type: "TeamHierarchyMembersPage",
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
    return TeamHierarchyMembersResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
