import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * The definition of Entity V3 Repository Spec object.
 */
export class EntityV3RepositorySpec {
  /**
   * A list of components the repository is a part of.
   */
  "componentOf"?: Array<string>;
  /**
   * A list of components that the repository is a dependency of.
   */
  "dependencyOf"?: Array<string>;
  /**
   * A list of components that the repository depends on.
   */
  "dependsOn"?: Array<string>;
  /**
   * The lifecycle state of the repository.
   */
  "lifecycle"?: string;
  /**
   * The importance of the repository.
   */
  "tier"?: string;
  /**
   * The type of repository.
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
    dependencyOf: {
      baseName: "dependencyOf",
      type: "Array<string>",
    },
    dependsOn: {
      baseName: "dependsOn",
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
    return EntityV3RepositorySpec.attributeTypeMap;
  }

  public constructor() {}
}
