import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageEmailAccessPolicyDataRelationshipsCreatedByUserData } from "./StatusPageEmailAccessPolicyDataRelationshipsCreatedByUserData";

/**
 * The Datadog user who created the email access policy.
 */
export class StatusPageEmailAccessPolicyDataRelationshipsCreatedByUser {
  /**
   * The data object identifying the Datadog user who created the email access policy.
   */
  "data": StatusPageEmailAccessPolicyDataRelationshipsCreatedByUserData;
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
      type: "StatusPageEmailAccessPolicyDataRelationshipsCreatedByUserData",
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
    return StatusPageEmailAccessPolicyDataRelationshipsCreatedByUser.attributeTypeMap;
  }

  public constructor() {}
}
