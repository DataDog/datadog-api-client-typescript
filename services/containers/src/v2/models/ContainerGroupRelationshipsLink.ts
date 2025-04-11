import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContainerGroupRelationshipsLinks } from "./ContainerGroupRelationshipsLinks";

/**
 * Relationships to Containers inside a Container Group.
 */
export class ContainerGroupRelationshipsLink {
  /**
   * Links data.
   */
  "data"?: Array<string>;
  /**
   * Links attributes.
   */
  "links"?: ContainerGroupRelationshipsLinks;
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
      type: "Array<string>",
    },
    links: {
      baseName: "links",
      type: "ContainerGroupRelationshipsLinks",
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
    return ContainerGroupRelationshipsLink.attributeTypeMap;
  }

  public constructor() {}
}
