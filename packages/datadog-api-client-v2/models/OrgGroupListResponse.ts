/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgGroupData } from "./OrgGroupData";
import { OrgGroupPaginationLinks } from "./OrgGroupPaginationLinks";
import { OrgGroupPaginationMeta } from "./OrgGroupPaginationMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of org groups.
 */
export class OrgGroupListResponse {
  /**
   * An array of org groups.
   */
  "data": Array<OrgGroupData>;
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
      type: "Array<OrgGroupData>",
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
    return OrgGroupListResponse.attributeTypeMap;
  }

  public constructor() {}
}
