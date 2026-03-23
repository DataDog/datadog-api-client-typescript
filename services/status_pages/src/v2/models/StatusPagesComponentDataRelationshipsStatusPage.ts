import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPagesComponentDataRelationshipsStatusPageData } from "./StatusPagesComponentDataRelationshipsStatusPageData";

/**
 * The status page the component belongs to.
 */
export class StatusPagesComponentDataRelationshipsStatusPage {
  /**
   * The data object identifying the status page the component belongs to.
   */
  "data": StatusPagesComponentDataRelationshipsStatusPageData;
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
      type: "StatusPagesComponentDataRelationshipsStatusPageData",
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
    return StatusPagesComponentDataRelationshipsStatusPage.attributeTypeMap;
  }

  public constructor() {}
}
