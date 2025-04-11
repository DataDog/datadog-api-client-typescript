import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContainerImageGroupRelationshipsLinks } from "./ContainerImageGroupRelationshipsLinks";

/**
 * Relationships to Container Images inside a Container Image Group.
 */
export class ContainerImageGroupImagesRelationshipsLink {
  /**
   * Links data.
   */
  "data"?: Array<string>;
  /**
   * Links attributes.
   */
  "links"?: ContainerImageGroupRelationshipsLinks;
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
      type: "ContainerImageGroupRelationshipsLinks",
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
    return ContainerImageGroupImagesRelationshipsLink.attributeTypeMap;
  }

  public constructor() {}
}
