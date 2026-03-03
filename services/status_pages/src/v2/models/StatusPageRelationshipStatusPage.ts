import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageRelationshipStatusPageData } from "./StatusPageRelationshipStatusPageData";

/**
 * Relationship to the status page.
 */
export class StatusPageRelationshipStatusPage {
  /**
   * Status page relationship data.
   */
  "data": StatusPageRelationshipStatusPageData;
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
      type: "StatusPageRelationshipStatusPageData",
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
    return StatusPageRelationshipStatusPage.attributeTypeMap;
  }

  public constructor() {}
}
