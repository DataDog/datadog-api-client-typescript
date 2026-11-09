import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageEmailAccessPolicyData } from "./StatusPageEmailAccessPolicyData";
import { StatusPageEmailAccessPolicyIncluded } from "./StatusPageEmailAccessPolicyIncluded";

/**
 * Response object for a status page email access policy.
 */
export class StatusPageEmailAccessPolicyResponse {
  /**
   * The data object for a status page email access policy.
   */
  "data": StatusPageEmailAccessPolicyData;
  /**
   * Resources related to the email access policy, when requested using the `include` query parameter.
   */
  "included"?: Array<StatusPageEmailAccessPolicyIncluded>;
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
      type: "StatusPageEmailAccessPolicyData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<StatusPageEmailAccessPolicyIncluded>",
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
    return StatusPageEmailAccessPolicyResponse.attributeTypeMap;
  }

  public constructor() {}
}
