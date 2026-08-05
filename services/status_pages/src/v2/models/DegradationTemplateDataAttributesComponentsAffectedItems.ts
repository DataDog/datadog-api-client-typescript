import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchDegradationTemplateRequestDataAttributesComponentsAffectedItemsStatus } from "./PatchDegradationTemplateRequestDataAttributesComponentsAffectedItemsStatus";

/**
 * A component affected by a degradation created from this template.
 */
export class DegradationTemplateDataAttributesComponentsAffectedItems {
  /**
   * The ID of the component.
   */
  "id": string;
  /**
   * The name of the component.
   */
  "name"?: string;
  /**
   * The status of the component.
   */
  "status": PatchDegradationTemplateRequestDataAttributesComponentsAffectedItemsStatus;
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
    name: {
      baseName: "name",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "PatchDegradationTemplateRequestDataAttributesComponentsAffectedItemsStatus",
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
    return DegradationTemplateDataAttributesComponentsAffectedItems.attributeTypeMap;
  }

  public constructor() {}
}
