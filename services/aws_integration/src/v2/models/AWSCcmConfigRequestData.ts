import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCcmConfigRequestAttributes } from "./AWSCcmConfigRequestAttributes";
import { AWSCcmConfigType } from "./AWSCcmConfigType";

/**
 * AWS CCM Config Create/Update Request data.
 */
export class AWSCcmConfigRequestData {
  /**
   * AWS CCM Config attributes for Create/Update requests.
   */
  "attributes": AWSCcmConfigRequestAttributes;
  /**
   * AWS CCM Config resource type.
   */
  "type": AWSCcmConfigType;
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
      type: "AWSCcmConfigRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSCcmConfigType",
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
    return AWSCcmConfigRequestData.attributeTypeMap;
  }

  public constructor() {}
}
