import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCcmConfig } from "./AWSCcmConfig";

/**
 * AWS CCM Config attributes for Create/Update requests.
 */
export class AWSCcmConfigRequestAttributes {
  /**
   * AWS Cloud Cost Management config.
   */
  "ccmConfig": AWSCcmConfig;
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
    ccmConfig: {
      baseName: "ccm_config",
      type: "AWSCcmConfig",
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
    return AWSCcmConfigRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
