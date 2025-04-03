import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Code location item.
 */
export class EntityV3DatadogCodeLocationItem {
  /**
   * The paths (glob) to the source code of the service.
   */
  "paths"?: Array<string>;
  /**
   * The repository path of the source code of the entity.
   */
  "repositoryUrl"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    paths: {
      baseName: "paths",
      type: "Array<string>",
    },
    repositoryUrl: {
      baseName: "repositoryURL",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3DatadogCodeLocationItem.attributeTypeMap;
  }

  public constructor() {}
}
