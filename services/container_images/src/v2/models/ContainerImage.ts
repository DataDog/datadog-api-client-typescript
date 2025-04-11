import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContainerImageAttributes } from "./ContainerImageAttributes";
import { ContainerImageType } from "./ContainerImageType";

/**
 * Container Image object.
 */
export class ContainerImage {
  /**
   * Attributes for a Container Image.
   */
  "attributes"?: ContainerImageAttributes;
  /**
   * Container Image ID.
   */
  "id"?: string;
  /**
   * Type of Container Image.
   */
  "type"?: ContainerImageType;
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
      type: "ContainerImageAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ContainerImageType",
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
    return ContainerImage.attributeTypeMap;
  }

  public constructor() {}
}
