import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageAsIncludedRelationshipsCreatedByUserData } from "./StatusPageAsIncludedRelationshipsCreatedByUserData";

/**
 * The Datadog user who created the status page.
 */
export class StatusPageAsIncludedRelationshipsCreatedByUser {
  /**
   * The data object identifying the Datadog user who created the status page.
   */
  "data": StatusPageAsIncludedRelationshipsCreatedByUserData;
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
      type: "StatusPageAsIncludedRelationshipsCreatedByUserData",
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
    return StatusPageAsIncludedRelationshipsCreatedByUser.attributeTypeMap;
  }

  public constructor() {}
}
