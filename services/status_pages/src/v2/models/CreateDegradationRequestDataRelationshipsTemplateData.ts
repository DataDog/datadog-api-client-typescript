import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchDegradationTemplateRequestDataType } from "./PatchDegradationTemplateRequestDataType";

/**
 * The data object identifying the template used to create the degradation.
 */
export class CreateDegradationRequestDataRelationshipsTemplateData {
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
    return CreateDegradationRequestDataRelationshipsTemplateData.attributeTypeMap;
  }

  public constructor() {}
}
