import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateBackfilledDegradationRequestDataRelationshipsTemplate } from "./CreateBackfilledDegradationRequestDataRelationshipsTemplate";

/**
 * The supported relationships for creating a backfilled degradation.
 */
export class CreateBackfilledDegradationRequestDataRelationships {
  /**
   * The template used to create the backfilled degradation.
   */
  "template"?: CreateBackfilledDegradationRequestDataRelationshipsTemplate;
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
      type: "CreateBackfilledDegradationRequestDataRelationshipsTemplate",
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
    return CreateBackfilledDegradationRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
