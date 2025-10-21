import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The EventBridge source to be created.
 */
export class AWSEventBridgeCreateRequestAttributes {
  /**
   * AWS Account ID.
   */
  "accountId": string;
  /**
   * Set to true if Datadog should create the event bus in addition to the event
   * source. Requires the `events:CreateEventBus` permission.
   */
  "createEventBus"?: boolean;
  /**
   * The given part of the event source name, which is then combined with an
   * assigned suffix to form the full name.
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
    createEventBus: {
      baseName: "create_event_bus",
      type: "boolean",
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
    return AWSEventBridgeCreateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
