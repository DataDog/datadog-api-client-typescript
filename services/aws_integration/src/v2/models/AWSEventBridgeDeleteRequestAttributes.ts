import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The EventBridge source to be deleted.
 */
export class AWSEventBridgeDeleteRequestAttributes {
  /**
   * AWS Account ID.
   */
  "accountId": string;
  /**
   * The event source name.
   */
  "eventGeneratorName": string;
  /**
   * The event source's
   * [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints).
   */
  "region": string;
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
    accountId: {
      baseName: "account_id",
      type: "string",
      required: true,
    },
    eventGeneratorName: {
      baseName: "event_generator_name",
      type: "string",
      required: true,
    },
    region: {
      baseName: "region",
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
    return AWSEventBridgeDeleteRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
