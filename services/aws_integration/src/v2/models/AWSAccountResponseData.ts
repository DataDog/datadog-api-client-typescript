import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSAccountResponseAttributes } from "./AWSAccountResponseAttributes";
import { AWSAccountType } from "./AWSAccountType";

/**
 * AWS Account response data.
 */
export class AWSAccountResponseData {
  /**
   * AWS Account response attributes.
   */
  "attributes"?: AWSAccountResponseAttributes;
  /**
   * Unique Datadog ID of the AWS Account Integration Config.
   * To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations)
   * endpoint and query by AWS Account ID.
   */
  "id": string;
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
      type: "AWSAccountResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSAccountType",
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
    return AWSAccountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
