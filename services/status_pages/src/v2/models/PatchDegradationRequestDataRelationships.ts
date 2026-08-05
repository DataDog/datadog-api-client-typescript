import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchDegradationRequestDataRelationshipsTemplate } from "./PatchDegradationRequestDataRelationshipsTemplate";

/**
 * The supported relationships for updating a degradation.
 */
export class PatchDegradationRequestDataRelationships {
  /**
   * The template used to create the degradation.
   */
  "template"?: PatchDegradationRequestDataRelationshipsTemplate;
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
    template: {
      baseName: "template",
      type: "PatchDegradationRequestDataRelationshipsTemplate",
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
    return PatchDegradationRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
