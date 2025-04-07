import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsOnDemandCreateData } from "./AwsOnDemandCreateData";

/**
 * Request object that includes the on demand task to submit.
 */
export class AwsOnDemandCreateRequest {
  /**
   * Object for a single AWS on demand task.
   */
  "data": AwsOnDemandCreateData;
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
      type: "AwsOnDemandCreateData",
      required: true,
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
    return AwsOnDemandCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
