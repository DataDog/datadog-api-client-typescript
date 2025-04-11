import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsCURConfig } from "./AwsCURConfig";

/**
 * List of AWS CUR configs.
 */
export class AwsCURConfigsResponse {
  /**
   * An AWS CUR config.
   */
  "data"?: Array<AwsCURConfig>;
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
      type: "Array<AwsCURConfig>",
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
    return AwsCURConfigsResponse.attributeTypeMap;
  }

  public constructor() {}
}
