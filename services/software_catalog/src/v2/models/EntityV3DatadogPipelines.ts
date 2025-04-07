import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * CI Pipelines association.
 */
export class EntityV3DatadogPipelines {
  /**
   * A list of CI Fingerprints that associate CI Pipelines with the entity.
   */
  "fingerprints"?: Array<string>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    fingerprints: {
      baseName: "fingerprints",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3DatadogPipelines.attributeTypeMap;
  }

  public constructor() {}
}
