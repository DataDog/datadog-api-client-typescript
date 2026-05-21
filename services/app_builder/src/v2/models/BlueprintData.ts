import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BlueprintAttributes } from "./BlueprintAttributes";
import { BlueprintDataType } from "./BlueprintDataType";

/**
 * A blueprint resource.
 */
export class BlueprintData {
  /**
   * The attributes of a blueprint resource.
   */
  "attributes": BlueprintAttributes;
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
      type: "BlueprintAttributes",
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
    return BlueprintData.attributeTypeMap;
  }

  public constructor() {}
}
