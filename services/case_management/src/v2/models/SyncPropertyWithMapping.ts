import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Sync property with mapping configuration.
 */
export class SyncPropertyWithMapping {
  /**
   * Map of source values to destination values for synchronization.
   */
  "mapping"?: { [key: string]: string };
  /**
   * Map of source names to display names used during synchronization.
   */
  "nameMapping"?: { [key: string]: string };
  /**
   * The direction and type of synchronization for this property.
   */
  "syncType"?: string;
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
    mapping: {
      baseName: "mapping",
      type: "{ [key: string]: string; }",
    },
    nameMapping: {
      baseName: "name_mapping",
      type: "{ [key: string]: string; }",
    },
    syncType: {
      baseName: "sync_type",
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
    return SyncPropertyWithMapping.attributeTypeMap;
  }

  public constructor() {}
}
