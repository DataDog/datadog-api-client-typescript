import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScaRequestDataAttributes } from "./ScaRequestDataAttributes";
import { ScaRequestDataType } from "./ScaRequestDataType";

/**
 * The data object in an SCA request, containing the dependency graph attributes and request type.
 */
export class ScaRequestData {
  /**
   * The attributes of an SCA request, containing dependency graph data, vulnerability information, and repository context.
   */
  "attributes"?: ScaRequestDataAttributes;
  /**
   * An optional identifier for this SCA request data object.
   */
  "id"?: string;
  /**
   * The type identifier for SCA dependency analysis requests.
   */
  "type": ScaRequestDataType;
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
      type: "ScaRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ScaRequestDataType",
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
    return ScaRequestData.attributeTypeMap;
  }

  public constructor() {}
}
