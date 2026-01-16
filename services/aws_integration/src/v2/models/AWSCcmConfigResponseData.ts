import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCcmConfigResponseAttributes } from "./AWSCcmConfigResponseAttributes";
import { AWSCcmConfigType } from "./AWSCcmConfigType";

/**
 * AWS CCM Config response data.
 */
export class AWSCcmConfigResponseData {
  /**
   * AWS CCM Config response attributes.
   */
  "attributes"?: AWSCcmConfigResponseAttributes;
  /**
   * Unique Datadog ID of the AWS Account Integration Config.
   * To get the config ID for an account, use the
   * [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations)
   * endpoint and query by AWS Account ID.
   */
  "id"?: string;
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
      type: "AWSCcmConfigResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
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
    return AWSCcmConfigResponseData.attributeTypeMap;
  }

  public constructor() {}
}
