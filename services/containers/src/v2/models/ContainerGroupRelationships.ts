import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContainerGroupRelationshipsLink } from "./ContainerGroupRelationshipsLink";

/**
 * Relationships to containers inside a container group.
 */
export class ContainerGroupRelationships {
  /**
   * Relationships to Containers inside a Container Group.
   */
  "containers"?: ContainerGroupRelationshipsLink;
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
    containers: {
      baseName: "containers",
      type: "ContainerGroupRelationshipsLink",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ContainerGroupRelationships.attributeTypeMap;
  }

  public constructor() {}
}
