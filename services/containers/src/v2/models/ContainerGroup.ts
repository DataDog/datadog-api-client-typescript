import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContainerGroupAttributes } from "./ContainerGroupAttributes";
import { ContainerGroupRelationships } from "./ContainerGroupRelationships";
import { ContainerGroupType } from "./ContainerGroupType";

/**
 * Container group object.
 */
export class ContainerGroup {
  /**
   * Attributes for a container group.
   */
  "attributes"?: ContainerGroupAttributes;
  /**
   * Container Group ID.
   */
  "id"?: string;
  /**
   * Relationships to containers inside a container group.
   */
  "relationships"?: ContainerGroupRelationships;
  /**
   * Type of container group.
   */
  "type"?: ContainerGroupType;
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
    attributes: {
      baseName: "attributes",
      type: "ContainerGroupAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "ContainerGroupRelationships",
    },
    type: {
      baseName: "type",
      type: "ContainerGroupType",
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
    return ContainerGroup.attributeTypeMap;
  }

  public constructor() {}
}
