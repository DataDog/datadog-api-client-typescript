import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationTemplateDataRelationshipsStatusPageData } from "./DegradationTemplateDataRelationshipsStatusPageData";

/**
 * The status page the degradation template belongs to.
 */
export class DegradationTemplateDataRelationshipsStatusPage {
  /**
   * The data object identifying the status page associated with a degradation template.
   */
  "data": DegradationTemplateDataRelationshipsStatusPageData;
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
      type: "DegradationTemplateDataRelationshipsStatusPageData",
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
    return DegradationTemplateDataRelationshipsStatusPage.attributeTypeMap;
  }

  public constructor() {}
}
