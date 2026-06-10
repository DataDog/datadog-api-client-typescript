import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipInferenceAttributes } from "./OwnershipInferenceAttributes";
import { OwnershipInferenceType } from "./OwnershipInferenceType";

/**
 * The data wrapper for a single ownership inference response.
 */
export class OwnershipInferenceData {
  /**
   * The attributes of a single ownership inference.
   */
  "attributes": OwnershipInferenceAttributes;
  /**
   * The identifier of the inference, formatted as `resource_id:owner_type`.
   */
  "id": string;
  /**
   * The type of the ownership inference resource. The value should always be `ownership_inference`.
   */
  "type": OwnershipInferenceType;
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
      type: "OwnershipInferenceAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OwnershipInferenceType",
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
    return OwnershipInferenceData.attributeTypeMap;
  }

  public constructor() {}
}
