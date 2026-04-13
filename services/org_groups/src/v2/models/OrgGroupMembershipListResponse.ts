import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupMembershipData } from "./OrgGroupMembershipData";
import { OrgGroupPaginationMeta } from "./OrgGroupPaginationMeta";

/**
 * Response containing a list of org group memberships.
 */
export class OrgGroupMembershipListResponse {
  /**
   * An array of org group memberships.
   */
  "data": Array<OrgGroupMembershipData>;
  /**
   * Pagination metadata.
   */
  "meta"?: OrgGroupPaginationMeta;
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
      type: "Array<OrgGroupMembershipData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "OrgGroupPaginationMeta",
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
    return OrgGroupMembershipListResponse.attributeTypeMap;
  }

  public constructor() {}
}
