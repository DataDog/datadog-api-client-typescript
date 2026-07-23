import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchDegradationTemplateRequestDataAttributes } from "./PatchDegradationTemplateRequestDataAttributes";
import { PatchDegradationTemplateRequestDataType } from "./PatchDegradationTemplateRequestDataType";

/**
 * The data object for updating a degradation template.
 */
export class PatchDegradationTemplateRequestData {
  /**
   * The supported attributes for updating a degradation template.
   */
  "attributes"?: PatchDegradationTemplateRequestDataAttributes;
  /**
   * The ID of the degradation template.
   */
  "id": string;
  /**
   * Degradation templates resource type.
   */
  "type": PatchDegradationTemplateRequestDataType;
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
      type: "PatchDegradationTemplateRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PatchDegradationTemplateRequestDataType",
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
    return PatchDegradationTemplateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
