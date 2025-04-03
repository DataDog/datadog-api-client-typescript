import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of Entity V3 Queue Spec object.
 */
export class EntityV3QueueSpec {
  /**
   * A list of components the queue is a part of
   */
  "componentOf"?: Array<string>;
  /**
   * The lifecycle state of the queue.
   */
  "lifecycle"?: string;
  /**
   * The importance of the queue.
   */
  "tier"?: string;
  /**
   * The type of queue.
   */
  "type"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    componentOf: {
      baseName: "componentOf",
      type: "Array<string>",
    },
    lifecycle: {
      baseName: "lifecycle",
      type: "string",
    },
    tier: {
      baseName: "tier",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3QueueSpec.attributeTypeMap;
  }

  public constructor() {}
}
