import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsHierarchyLinksResponseMetaPage } from "./TeamsHierarchyLinksResponseMetaPage";

/**
 * Team hierarchy links response metadata.
 */
export class TeamsHierarchyLinksResponseMeta {
  /**
   * Teams hierarchy links response page metadata.
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
