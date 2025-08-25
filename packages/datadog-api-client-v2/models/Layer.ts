/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LayerAttributes } from "./LayerAttributes";
import { LayerRelationships } from "./LayerRelationships";
import { LayerType } from "./LayerType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  "type": LayerType;

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
      required: true,
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
    return Layer.attributeTypeMap;
  }

  public constructor() {}
}
