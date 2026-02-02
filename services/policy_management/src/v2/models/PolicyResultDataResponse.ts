import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PolicyResultAttributesResponse } from "./PolicyResultAttributesResponse";
import { PolicyResultType } from "./PolicyResultType";

/**
 * Data envelope for policy result response.
 */
export class PolicyResultDataResponse {
  /**
   * Attributes of a policy evaluation result.
   */
  "attributes": PolicyResultAttributesResponse;
  /**
   * The unique identifier of the policy result.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `policy_result`.
   */
  "type": PolicyResultType;
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
    attributes: {
      baseName: "attributes",
      type: "PolicyResultAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PolicyResultType",
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
    return PolicyResultDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
