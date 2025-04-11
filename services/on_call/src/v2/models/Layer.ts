import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LayerAttributes } from "./LayerAttributes";
import { LayerRelationships } from "./LayerRelationships";
import { LayerType } from "./LayerType";

/**
 * Encapsulates a layer resource, holding attributes like rotation details, plus relationships to the members covering that layer.
 */
export class Layer {
  /**
   * Describes key properties of a Layer, including rotation details, name, start/end times, and any restrictions.
   */
  "attributes"?: LayerAttributes;
  /**
   * A unique identifier for this layer.
   */
  "id"?: string;
  /**
   * Holds references to objects related to the Layer entity, such as its members.
   */
  "relationships"?: LayerRelationships;
  /**
   * Layers resource type.
   */
  "type"?: LayerType;
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
      type: "LayerAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "LayerRelationships",
    },
    type: {
      baseName: "type",
      type: "LayerType",
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
    return Layer.attributeTypeMap;
  }

  public constructor() {}
}
