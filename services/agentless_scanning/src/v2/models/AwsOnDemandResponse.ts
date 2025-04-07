import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsOnDemandData } from "./AwsOnDemandData";

/**
 * Response object that includes an AWS on demand task.
 */
export class AwsOnDemandResponse {
  /**
   * Single AWS on demand task.
   */
  "data"?: AwsOnDemandData;
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
      type: "AwsOnDemandData",
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
    return AwsOnDemandResponse.attributeTypeMap;
  }

  public constructor() {}
}
