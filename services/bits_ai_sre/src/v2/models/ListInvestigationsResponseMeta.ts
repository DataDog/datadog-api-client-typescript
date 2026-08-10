import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListInvestigationsResponseMetaPage } from "./ListInvestigationsResponseMetaPage";

/**
 * Metadata for the list investigations response.
 */
export class ListInvestigationsResponseMeta {
  /**
   * Pagination metadata.
   */
  "page": ListInvestigationsResponseMetaPage;
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
      type: "ListInvestigationsResponseMetaPage",
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
    return ListInvestigationsResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
