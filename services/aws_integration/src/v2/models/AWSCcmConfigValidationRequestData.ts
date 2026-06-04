import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCcmConfigValidationRequestAttributes } from "./AWSCcmConfigValidationRequestAttributes";
import { AWSCcmConfigValidationType } from "./AWSCcmConfigValidationType";

/**
 * AWS CCM config validation request data.
 */
export class AWSCcmConfigValidationRequestData {
  /**
   * Attributes for an AWS CCM config validation request.
   */
  "attributes": AWSCcmConfigValidationRequestAttributes;
  /**
   * AWS CCM config validation resource type.
   */
  "type": AWSCcmConfigValidationType;
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
      type: "AWSCcmConfigValidationRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSCcmConfigValidationType",
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
    return AWSCcmConfigValidationRequestData.attributeTypeMap;
  }

  public constructor() {}
}
