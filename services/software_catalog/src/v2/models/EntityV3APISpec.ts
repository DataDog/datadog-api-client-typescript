import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityV3APISpecInterface } from "./EntityV3APISpecInterface";

/**
 * The definition of Entity V3 API Spec object.
 */
export class EntityV3APISpec {
  /**
   * Services which implemented the API.
   */
  "implementedBy"?: Array<string>;
  /**
   * The API definition.
   */
  "_interface"?: EntityV3APISpecInterface;
  /**
   * The lifecycle state of the component.
   */
  "lifecycle"?: string;
  /**
   * The importance of the component.
   */
  "tier"?: string;
  /**
   * The type of API.
   */
  "type"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    implementedBy: {
      baseName: "implementedBy",
      type: "Array<string>",
    },
    _interface: {
      baseName: "interface",
      type: "EntityV3APISpecInterface",
    },
    lifecycle: {
      baseName: "lifecycle",
      type: "string",
    },
    tier: {
      baseName: "tier",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3APISpec.attributeTypeMap;
  }

  public constructor() {}
}
