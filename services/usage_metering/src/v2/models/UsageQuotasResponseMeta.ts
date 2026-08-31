import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageQuotasResponseMetaPage } from "./UsageQuotasResponseMetaPage";

/**
 * Pagination metadata for a usage quota list response.
 */
export class UsageQuotasResponseMeta {
  /**
   * Cursor pagination fields for a usage quota list response.
   */
  "page": UsageQuotasResponseMetaPage;
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
      type: "UsageQuotasResponseMetaPage",
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
    return UsageQuotasResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
