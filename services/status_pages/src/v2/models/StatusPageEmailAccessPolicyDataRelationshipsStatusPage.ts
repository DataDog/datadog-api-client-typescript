import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageEmailAccessPolicyDataRelationshipsStatusPageData } from "./StatusPageEmailAccessPolicyDataRelationshipsStatusPageData";

/**
 * The status page associated with the email access policy.
 */
export class StatusPageEmailAccessPolicyDataRelationshipsStatusPage {
  /**
   * The data object identifying the status page associated with the email access policy.
   */
  "data": StatusPageEmailAccessPolicyDataRelationshipsStatusPageData;
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
      type: "StatusPageEmailAccessPolicyDataRelationshipsStatusPageData",
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
    return StatusPageEmailAccessPolicyDataRelationshipsStatusPage.attributeTypeMap;
  }

  public constructor() {}
}
