import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsCURConfig } from "./AwsCURConfig";

/**
 * Response of AWS CUR config.
 */
export class AwsCURConfigResponse {
  /**
   * AWS CUR config.
   */
  "data"?: AwsCURConfig;
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
      type: "AwsCURConfig",
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
    return AwsCURConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
