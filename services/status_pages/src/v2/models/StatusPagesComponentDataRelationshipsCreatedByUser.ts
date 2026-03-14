import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPagesComponentDataRelationshipsCreatedByUserData } from "./StatusPagesComponentDataRelationshipsCreatedByUserData";

/**
 * The Datadog user who created the component.
 */
export class StatusPagesComponentDataRelationshipsCreatedByUser {
  /**
   * The data object identifying the Datadog user who created the component.
   */
  "data": StatusPagesComponentDataRelationshipsCreatedByUserData;
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
      type: "StatusPagesComponentDataRelationshipsCreatedByUserData",
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
    return StatusPagesComponentDataRelationshipsCreatedByUser.attributeTypeMap;
  }

  public constructor() {}
}
