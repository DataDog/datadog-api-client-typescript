import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchDegradationRequestDataAttributes } from "./PatchDegradationRequestDataAttributes";
import { PatchDegradationRequestDataType } from "./PatchDegradationRequestDataType";

export class PatchDegradationRequestData {
  /**
   * The supported attributes for updating a degradation.
   */
  "attributes": PatchDegradationRequestDataAttributes;
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
      type: "PatchDegradationRequestDataAttributes",
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
    return PatchDegradationRequestData.attributeTypeMap;
  }

  public constructor() {}
}
