import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSEventBridgeCreateStatus } from "./AWSEventBridgeCreateStatus";

/**
 * A created EventBridge source.
 */
export class AWSEventBridgeCreateResponse {
  /**
   * The event source name.
   */
  "eventSourceName"?: string;
  /**
   * True if the event bus was created in addition to the source.
   */
  "hasBus"?: boolean;
  /**
   * The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints).
   */
  "region"?: string;
  /**
   * The event source status "created".
   */
  "status"?: AWSEventBridgeCreateStatus;
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
    eventSourceName: {
      baseName: "event_source_name",
      type: "string",
    },
    hasBus: {
      baseName: "has_bus",
      type: "boolean",
    },
    region: {
      baseName: "region",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "AWSEventBridgeCreateStatus",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSEventBridgeCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
