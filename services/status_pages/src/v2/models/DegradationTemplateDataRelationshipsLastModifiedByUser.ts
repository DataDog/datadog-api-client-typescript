import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationTemplateDataRelationshipsLastModifiedByUserData } from "./DegradationTemplateDataRelationshipsLastModifiedByUserData";

/**
 * The Datadog user who last modified the degradation template.
 */
export class DegradationTemplateDataRelationshipsLastModifiedByUser {
  /**
   * The data object identifying the Datadog user who last modified the degradation template.
   */
  "data": DegradationTemplateDataRelationshipsLastModifiedByUserData;
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
      type: "DegradationTemplateDataRelationshipsLastModifiedByUserData",
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
    return DegradationTemplateDataRelationshipsLastModifiedByUser.attributeTypeMap;
  }

  public constructor() {}
}
