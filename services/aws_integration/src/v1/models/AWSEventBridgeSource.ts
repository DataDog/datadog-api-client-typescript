import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An EventBridge source.
 */
export class AWSEventBridgeSource {
  /**
   * The event source name.
   */
  "name"?: string;
  /**
   * The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints).
   */
  "region"?: string;
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
    name: {
      baseName: "name",
      type: "string",
    },
    region: {
      baseName: "region",
      type: "string",
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
    return AWSEventBridgeSource.attributeTypeMap;
  }

  public constructor() {}
}
