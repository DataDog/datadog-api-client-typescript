import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationTemplateDataRelationshipsCreatedByUserData } from "./DegradationTemplateDataRelationshipsCreatedByUserData";

/**
 * The Datadog user who created the degradation template.
 */
export class DegradationTemplateDataRelationshipsCreatedByUser {
  /**
   * The data object identifying the Datadog user who created the degradation template.
   */
  "data": DegradationTemplateDataRelationshipsCreatedByUserData;
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
      type: "DegradationTemplateDataRelationshipsCreatedByUserData",
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
    return DegradationTemplateDataRelationshipsCreatedByUser.attributeTypeMap;
  }

  public constructor() {}
}
