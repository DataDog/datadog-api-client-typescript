import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of Entity V3 Datastore Spec object.
 */
export class EntityV3DatastoreSpec {
  /**
   * A list of components the datastore is a part of
   */
  "componentOf"?: Array<string>;
  /**
   * The lifecycle state of the datastore.
   */
  "lifecycle"?: string;
  /**
   * The importance of the datastore.
   */
  "tier"?: string;
  /**
   * The type of datastore.
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
    return EntityV3DatastoreSpec.attributeTypeMap;
  }

  public constructor() {}
}
