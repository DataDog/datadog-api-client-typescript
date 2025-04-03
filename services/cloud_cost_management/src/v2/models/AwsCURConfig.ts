import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsCURConfigAttributes } from "./AwsCURConfigAttributes";
import { AwsCURConfigType } from "./AwsCURConfigType";

/**
 * AWS CUR config.
 */
export class AwsCURConfig {
  /**
   * Attributes for An AWS CUR config.
   */
  "attributes": AwsCURConfigAttributes;
  /**
   * The ID of the AWS CUR config.
   */
  "id"?: number;
  /**
   * Type of AWS CUR config.
   */
  "type": AwsCURConfigType;
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
      type: "AwsCURConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "AwsCURConfigType",
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
    return AwsCURConfig.attributeTypeMap;
  }

  public constructor() {}
}
