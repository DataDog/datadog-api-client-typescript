import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateDegradationTemplateRequestDataAttributesComponentsAffectedItems } from "./CreateDegradationTemplateRequestDataAttributesComponentsAffectedItems";
import { CreateDegradationTemplateRequestDataAttributesUpdatesItems } from "./CreateDegradationTemplateRequestDataAttributesUpdatesItems";

/**
 * The attributes for creating a degradation template.
 */
export class CreateDegradationTemplateRequestDataAttributes {
  /**
   * The components affected by a degradation created from this template.
   */
  "componentsAffected"?: Array<CreateDegradationTemplateRequestDataAttributesComponentsAffectedItems>;
  /**
   * The title used for a degradation created from this template.
   */
  "degradationTitle"?: string;
  /**
   * The name of the degradation template.
   */
  "name": string;
  /**
   * The pre-filled updates for a degradation created from this template.
   */
  "updates"?: Array<CreateDegradationTemplateRequestDataAttributesUpdatesItems>;
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
    componentsAffected: {
      baseName: "components_affected",
      type: "Array<CreateDegradationTemplateRequestDataAttributesComponentsAffectedItems>",
    },
    degradationTitle: {
      baseName: "degradation_title",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    updates: {
      baseName: "updates",
      type: "Array<CreateDegradationTemplateRequestDataAttributesUpdatesItems>",
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
    return CreateDegradationTemplateRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
