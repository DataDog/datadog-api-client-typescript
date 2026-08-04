import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationTemplateDataAttributes } from "./DegradationTemplateDataAttributes";
import { DegradationTemplateDataRelationships } from "./DegradationTemplateDataRelationships";
import { PatchDegradationTemplateRequestDataType } from "./PatchDegradationTemplateRequestDataType";

/**
 * The data object for a degradation template.
 */
export class DegradationTemplateData {
  /**
   * The attributes of a degradation template.
   */
  "attributes"?: DegradationTemplateDataAttributes;
  /**
   * The ID of the degradation template.
   */
  "id"?: string;
  /**
   * The relationships of a degradation template.
   */
  "relationships"?: DegradationTemplateDataRelationships;
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
      type: "DegradationTemplateDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "DegradationTemplateDataRelationships",
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
    return DegradationTemplateData.attributeTypeMap;
  }

  public constructor() {}
}
