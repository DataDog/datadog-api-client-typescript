import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationUpdateDataRelationshipsStatusPageData } from "./DegradationUpdateDataRelationshipsStatusPageData";

/**
 * The status page relationship of a degradation update.
 */
export class DegradationUpdateDataRelationshipsStatusPage {
  /**
   * The status page linked to a degradation update.
   */
  "data": DegradationUpdateDataRelationshipsStatusPageData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "DegradationUpdateDataRelationshipsStatusPageData",
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
    return DegradationUpdateDataRelationshipsStatusPage.attributeTypeMap;
  }

  public constructor() {}
}
