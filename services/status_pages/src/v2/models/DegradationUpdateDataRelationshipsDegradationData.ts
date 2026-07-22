import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchDegradationRequestDataType } from "./PatchDegradationRequestDataType";

/**
 * The degradation linked to a degradation update.
 */
export class DegradationUpdateDataRelationshipsDegradationData {
  /**
   * The ID of the degradation.
   */
  "id": string;
  /**
   * Degradations resource type.
   */
  "type": PatchDegradationRequestDataType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return DegradationUpdateDataRelationshipsDegradationData.attributeTypeMap;
  }

  public constructor() {}
}
