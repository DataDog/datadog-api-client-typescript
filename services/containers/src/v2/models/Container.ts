import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContainerAttributes } from "./ContainerAttributes";
import { ContainerType } from "./ContainerType";

/**
 * Container object.
 */
export class Container {
  /**
   * Attributes for a container.
   */
  "attributes"?: ContainerAttributes;
  /**
   * Container ID.
   */
  "id"?: string;
  /**
   * Type of container.
   */
  "type"?: ContainerType;
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
      type: "ContainerAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ContainerType",
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
    return Container.attributeTypeMap;
  }

  public constructor() {}
}
