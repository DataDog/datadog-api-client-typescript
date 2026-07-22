import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipInferenceListAttributes } from "./OwnershipInferenceListAttributes";
import { OwnershipInferencesType } from "./OwnershipInferencesType";

/**
 * The data wrapper for the ownership inferences collection response.
 */
export class OwnershipInferenceListData {
  /**
   * The attributes of the ownership inferences collection response.
   */
  "attributes": OwnershipInferenceListAttributes;
  /**
   * The resource identifier associated with the returned inferences.
   */
  "id": string;
  /**
   * The type of the ownership inferences collection resource. The value should always be `ownership_inferences`.
   */
  "type": OwnershipInferencesType;
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
    attributes: {
      baseName: "attributes",
      type: "OwnershipInferenceListAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OwnershipInferencesType",
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
    return OwnershipInferenceListData.attributeTypeMap;
  }

  public constructor() {}
}
