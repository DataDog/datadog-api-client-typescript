import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSAccountCreateRequestAttributes } from "./AWSAccountCreateRequestAttributes";
import { AWSAccountType } from "./AWSAccountType";

/**
 * AWS Account Create Request data.
 */
export class AWSAccountCreateRequestData {
  /**
   * The AWS Account Integration Config to be created.
   */
  "attributes": AWSAccountCreateRequestAttributes;
  /**
   * AWS Account resource type.
   */
  "type": AWSAccountType;
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
      type: "AWSAccountCreateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSAccountType",
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
    return AWSAccountCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
