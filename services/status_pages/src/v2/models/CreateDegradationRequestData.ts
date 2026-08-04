import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateDegradationRequestDataAttributes } from "./CreateDegradationRequestDataAttributes";
import { CreateDegradationRequestDataRelationships } from "./CreateDegradationRequestDataRelationships";
import { PatchDegradationRequestDataType } from "./PatchDegradationRequestDataType";

/**
 * The data object for creating a degradation.
 */
export class CreateDegradationRequestData {
  /**
   * The supported attributes for creating a degradation.
   */
  "attributes": CreateDegradationRequestDataAttributes;
  /**
   * The supported relationships for creating a degradation.
   */
  "relationships"?: CreateDegradationRequestDataRelationships;
  /**
   * Degradations resource type.
   */
  "type": PatchDegradationRequestDataType;
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
      type: "CreateDegradationRequestDataAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "CreateDegradationRequestDataRelationships",
    },
    type: {
      baseName: "type",
      type: "PatchDegradationRequestDataType",
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
    return CreateDegradationRequestData.attributeTypeMap;
  }

  public constructor() {}
}
