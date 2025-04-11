import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSAccountType } from "./AWSAccountType";
import { AWSAccountUpdateRequestAttributes } from "./AWSAccountUpdateRequestAttributes";

/**
 * AWS Account Update Request data.
 */
export class AWSAccountUpdateRequestData {
  /**
   * The AWS Account Integration Config to be updated.
   */
  "attributes": AWSAccountUpdateRequestAttributes;
  /**
   * Unique Datadog ID of the AWS Account Integration Config.
   * To get the config ID for an account, use the [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations)
   * endpoint and query by AWS Account ID.
   */
  "id"?: string;
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
      type: "AWSAccountUpdateRequestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return AWSAccountUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
