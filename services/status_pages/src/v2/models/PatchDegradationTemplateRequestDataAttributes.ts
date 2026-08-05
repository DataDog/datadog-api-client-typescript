import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchDegradationTemplateRequestDataAttributesComponentsAffectedItems } from "./PatchDegradationTemplateRequestDataAttributesComponentsAffectedItems";
import { PatchDegradationTemplateRequestDataAttributesUpdatesItems } from "./PatchDegradationTemplateRequestDataAttributesUpdatesItems";

/**
 * The supported attributes for updating a degradation template.
 */
export class PatchDegradationTemplateRequestDataAttributes {
  /**
   * The components affected by a degradation created from this template.
   */
  "componentsAffected"?: Array<PatchDegradationTemplateRequestDataAttributesComponentsAffectedItems>;
  /**
   * The title used for a degradation created from this template.
   */
  "degradationTitle"?: string;
  /**
   * The name of the degradation template.
   */
  "name"?: string;
  /**
   * The pre-filled updates for a degradation created from this template.
   */
  "updates"?: Array<PatchDegradationTemplateRequestDataAttributesUpdatesItems>;
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
      type: "Array<PatchDegradationTemplateRequestDataAttributesComponentsAffectedItems>",
    },
    degradationTitle: {
      baseName: "degradation_title",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    updates: {
      baseName: "updates",
      type: "Array<PatchDegradationTemplateRequestDataAttributesUpdatesItems>",
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
    return PatchDegradationTemplateRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
