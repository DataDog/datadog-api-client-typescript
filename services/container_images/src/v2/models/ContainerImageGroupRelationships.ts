import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContainerImageGroupImagesRelationshipsLink } from "./ContainerImageGroupImagesRelationshipsLink";

/**
 * Relationships inside a Container Image Group.
 */
export class ContainerImageGroupRelationships {
  /**
   * Relationships to Container Images inside a Container Image Group.
   */
  "containerImages"?: ContainerImageGroupImagesRelationshipsLink;
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
    containerImages: {
      baseName: "container_images",
      type: "ContainerImageGroupImagesRelationshipsLink",
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
    return ContainerImageGroupRelationships.attributeTypeMap;
  }

  public constructor() {}
}
