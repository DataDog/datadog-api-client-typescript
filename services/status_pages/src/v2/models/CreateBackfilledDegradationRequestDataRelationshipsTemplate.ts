import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateBackfilledDegradationRequestDataRelationshipsTemplateData } from "./CreateBackfilledDegradationRequestDataRelationshipsTemplateData";

/**
 * The template used to create the backfilled degradation.
 */
export class CreateBackfilledDegradationRequestDataRelationshipsTemplate {
  /**
   * The data object identifying the template used to create the backfilled degradation.
   */
  "data": CreateBackfilledDegradationRequestDataRelationshipsTemplateData;
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
      type: "CreateBackfilledDegradationRequestDataRelationshipsTemplateData",
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
    return CreateBackfilledDegradationRequestDataRelationshipsTemplate.attributeTypeMap;
  }

  public constructor() {}
}
