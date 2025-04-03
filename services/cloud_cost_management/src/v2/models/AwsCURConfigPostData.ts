import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsCURConfigPostRequestAttributes } from "./AwsCURConfigPostRequestAttributes";
import { AwsCURConfigPostRequestType } from "./AwsCURConfigPostRequestType";

/**
 * AWS CUR config Post data.
 */
export class AwsCURConfigPostData {
  /**
   * Attributes for AWS CUR config Post Request.
   */
  "attributes": AwsCURConfigPostRequestAttributes;
  /**
   * Type of AWS CUR config Post Request.
   */
  "type": AwsCURConfigPostRequestType;
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
      type: "AwsCURConfigPostRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AwsCURConfigPostRequestType",
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
    return AwsCURConfigPostData.attributeTypeMap;
  }

  public constructor() {}
}
