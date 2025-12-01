import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsHierarchyLinksResponseMetaPage } from "./TeamsHierarchyLinksResponseMetaPage";

/**
 * Metadata that is included in the response when querying the team hierarchy links
 */
export class TeamsHierarchyLinksResponseMeta {
  /**
   * Metadata related to paging information that is included in the response when querying the team hierarchy links
   */
  "page"?: TeamsHierarchyLinksResponseMetaPage;
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
      type: "TeamsHierarchyLinksResponseMetaPage",
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
    return TeamsHierarchyLinksResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
