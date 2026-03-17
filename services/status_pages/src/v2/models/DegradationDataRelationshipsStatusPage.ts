import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationDataRelationshipsStatusPageData } from "./DegradationDataRelationshipsStatusPageData";

/**
 * The status page the degradation belongs to.
 */
export class DegradationDataRelationshipsStatusPage {
  /**
   * The data object identifying the status page the degradation belongs to.
   */
  "data": DegradationDataRelationshipsStatusPageData;
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
      type: "DegradationDataRelationshipsStatusPageData",
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
    return DegradationDataRelationshipsStatusPage.attributeTypeMap;
  }

  public constructor() {}
}
