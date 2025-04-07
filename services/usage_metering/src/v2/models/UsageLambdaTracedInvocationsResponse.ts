import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageDataObject } from "./UsageDataObject";

/**
 * Lambda Traced Invocations usage response.
 */
export class UsageLambdaTracedInvocationsResponse {
  /**
   * Response containing Lambda Traced Invocations usage.
   */
  "data"?: Array<UsageDataObject>;
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
      type: "Array<UsageDataObject>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageLambdaTracedInvocationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
