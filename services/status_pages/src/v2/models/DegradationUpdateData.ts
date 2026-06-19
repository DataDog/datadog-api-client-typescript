import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationUpdateDataAttributes } from "./DegradationUpdateDataAttributes";
import { DegradationUpdateDataRelationships } from "./DegradationUpdateDataRelationships";
import { PatchDegradationUpdateRequestDataType } from "./PatchDegradationUpdateRequestDataType";

/**
 * The data object for a degradation update.
 */
export class DegradationUpdateData {
  /**
   * Attributes of a degradation update resource.
   */
  "attributes"?: DegradationUpdateDataAttributes;
  /**
   * The ID of the degradation update.
   */
  "id"?: string;
  /**
   * Relationships of a degradation update resource.
   */
  "relationships"?: DegradationUpdateDataRelationships;
  /**
   * Degradation updates resource type.
   */
  "type": PatchDegradationUpdateRequestDataType;
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
      type: "DegradationUpdateDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "DegradationUpdateDataRelationships",
    },
    type: {
      baseName: "type",
      type: "PatchDegradationUpdateRequestDataType",
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
    return DegradationUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
