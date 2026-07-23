import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateDegradationTemplateRequestDataAttributes } from "./CreateDegradationTemplateRequestDataAttributes";
import { PatchDegradationTemplateRequestDataType } from "./PatchDegradationTemplateRequestDataType";

/**
 * The data object for creating a degradation template.
 */
export class CreateDegradationTemplateRequestData {
  /**
   * The attributes for creating a degradation template.
   */
  "attributes"?: CreateDegradationTemplateRequestDataAttributes;
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
      type: "CreateDegradationTemplateRequestDataAttributes",
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
    return CreateDegradationTemplateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
