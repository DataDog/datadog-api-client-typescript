import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPaginationMetaPage } from "./OrgGroupPaginationMetaPage";

/**
 * Pagination metadata.
 */
export class OrgGroupPaginationMeta {
  /**
   * Page-based pagination details.
   */
  "page": OrgGroupPaginationMetaPage;
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
      type: "OrgGroupPaginationMetaPage",
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
    return OrgGroupPaginationMeta.attributeTypeMap;
  }

  public constructor() {}
}
