import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateDegradationRequestDataRelationshipsTemplate } from "./CreateDegradationRequestDataRelationshipsTemplate";

/**
 * The supported relationships for creating a degradation.
 */
export class CreateDegradationRequestDataRelationships {
  /**
   * The template used to create the degradation.
   */
  "template"?: CreateDegradationRequestDataRelationshipsTemplate;
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
      type: "CreateDegradationRequestDataRelationshipsTemplate",
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
    return CreateDegradationRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
