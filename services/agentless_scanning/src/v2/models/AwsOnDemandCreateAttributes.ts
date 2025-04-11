import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for the AWS on demand task.
 */
export class AwsOnDemandCreateAttributes {
  /**
   * The arn of the resource to scan. Agentless supports the scan of EC2 instances, lambda functions, AMI, ECR, RDS and S3 buckets.
   */
  "arn": string;
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
    arn: {
      baseName: "arn",
      type: "string",
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
    return AwsOnDemandCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
