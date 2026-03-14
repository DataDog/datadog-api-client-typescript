import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageDataRelationshipsCreatedByUserData } from "./StatusPageDataRelationshipsCreatedByUserData";

/**
 * The Datadog user who created the status page.
 */
export class StatusPageDataRelationshipsCreatedByUser {
  /**
   * The data object identifying the Datadog user who created the status page.
   */
  "data": StatusPageDataRelationshipsCreatedByUserData;
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
      type: "StatusPageDataRelationshipsCreatedByUserData",
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
    return StatusPageDataRelationshipsCreatedByUser.attributeTypeMap;
  }

  public constructor() {}
}
