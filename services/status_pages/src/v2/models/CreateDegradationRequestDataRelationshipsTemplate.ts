import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateDegradationRequestDataRelationshipsTemplateData } from "./CreateDegradationRequestDataRelationshipsTemplateData";

/**
 * The template used to create the degradation.
 */
export class CreateDegradationRequestDataRelationshipsTemplate {
  /**
   * The data object identifying the template used to create the degradation.
   */
  "data": CreateDegradationRequestDataRelationshipsTemplateData;
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
    data: {
      baseName: "data",
      type: "CreateDegradationRequestDataRelationshipsTemplateData",
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
    return CreateDegradationRequestDataRelationshipsTemplate.attributeTypeMap;
  }

  public constructor() {}
}
