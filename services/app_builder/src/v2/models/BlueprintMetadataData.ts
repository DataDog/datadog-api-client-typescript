import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BlueprintDataType } from "./BlueprintDataType";
import { BlueprintMetadataAttributes } from "./BlueprintMetadataAttributes";

/**
 * A blueprint metadata resource.
 */
export class BlueprintMetadataData {
  /**
   * The attributes of a blueprint metadata resource.
   */
  "attributes": BlueprintMetadataAttributes;
  /**
   * The ID of the blueprint.
   */
  "id": string;
  /**
   * The resource type for a blueprint.
   */
  "type": BlueprintDataType;
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
      type: "BlueprintMetadataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "BlueprintDataType",
      required: true,
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
    return BlueprintMetadataData.attributeTypeMap;
  }

  public constructor() {}
}
