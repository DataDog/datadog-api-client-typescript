import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPagesComponentGroupRelationshipsStatusPageData } from "./StatusPagesComponentGroupRelationshipsStatusPageData";

/**
 * The status page the component group belongs to.
 */
export class StatusPagesComponentGroupRelationshipsStatusPage {
  "data": StatusPagesComponentGroupRelationshipsStatusPageData;
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
      type: "StatusPagesComponentGroupRelationshipsStatusPageData",
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
    return StatusPagesComponentGroupRelationshipsStatusPage.attributeTypeMap;
  }

  public constructor() {}
}
