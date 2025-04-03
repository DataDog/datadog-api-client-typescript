import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsCURConfigPatchRequestAttributes } from "./AwsCURConfigPatchRequestAttributes";
import { AwsCURConfigPatchRequestType } from "./AwsCURConfigPatchRequestType";

/**
 * AWS CUR config Patch data.
 */
export class AwsCURConfigPatchData {
  /**
   * Attributes for AWS CUR config Patch Request.
   */
  "attributes": AwsCURConfigPatchRequestAttributes;
  /**
   * Type of AWS CUR config Patch Request.
   */
  "type": AwsCURConfigPatchRequestType;
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
      type: "AwsCURConfigPatchRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AwsCURConfigPatchRequestType",
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
    return AwsCURConfigPatchData.attributeTypeMap;
  }

  public constructor() {}
}
