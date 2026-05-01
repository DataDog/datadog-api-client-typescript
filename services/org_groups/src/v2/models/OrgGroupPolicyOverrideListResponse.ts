import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPaginationLinks } from "./OrgGroupPaginationLinks";
import { OrgGroupPaginationMeta } from "./OrgGroupPaginationMeta";
import { OrgGroupPolicyOverrideData } from "./OrgGroupPolicyOverrideData";

/**
 * Response containing a list of org group policy overrides.
 */
export class OrgGroupPolicyOverrideListResponse {
  /**
   * An array of org group policy overrides.
   */
  "data": Array<OrgGroupPolicyOverrideData>;
  /**
   * Pagination links for navigating between pages of an org group list response.
   */
  "links"?: OrgGroupPaginationLinks;
  /**
   * Pagination metadata for org group list responses.
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
      type: "Array<OrgGroupPolicyOverrideData>",
      required: true,
    },
    links: {
      baseName: "links",
      type: "OrgGroupPaginationLinks",
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
    return OrgGroupPolicyOverrideListResponse.attributeTypeMap;
  }

  public constructor() {}
}
