import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScaRequestDataAttributesDependenciesItemsLocationsItems } from "./ScaRequestDataAttributesDependenciesItemsLocationsItems";
import { ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems } from "./ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems";

/**
 * A dependency found in the repository, including its identity, location, and reachability metadata.
 */
export class ScaRequestDataAttributesDependenciesItems {
  /**
   * A list of patterns or identifiers that should be excluded from analysis for this dependency.
   */
  "exclusions"?: Array<string>;
  /**
   * The group or organization namespace of the dependency (e.g., Maven group ID).
   */
  "group"?: string;
  /**
   * Indicates whether this is a development-only dependency not used in production.
   */
  "isDev"?: boolean;
  /**
   * Indicates whether this is a direct dependency (as opposed to a transitive one).
   */
  "isDirect"?: boolean;
  /**
   * The programming language ecosystem of this dependency (e.g., java, python, javascript).
   */
  "language"?: string;
  /**
   * The list of source file locations where this dependency is declared.
   */
  "locations"?: Array<ScaRequestDataAttributesDependenciesItemsLocationsItems>;
  /**
   * The name of the dependency package.
   */
  "name"?: string;
  /**
   * The package manager responsible for this dependency (e.g., maven, pip, npm).
   */
  "packageManager"?: string;
  /**
   * The Package URL (PURL) uniquely identifying this dependency.
   */
  "purl"?: string;
  /**
   * Properties describing symbols from this dependency that are reachable in the application code.
   */
  "reachableSymbolProperties"?: Array<ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems>;
  /**
   * The version of the dependency.
   */
  "version"?: string;
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
    exclusions: {
      baseName: "exclusions",
      type: "Array<string>",
    },
    group: {
      baseName: "group",
      type: "string",
    },
    isDev: {
      baseName: "is_dev",
      type: "boolean",
    },
    isDirect: {
      baseName: "is_direct",
      type: "boolean",
    },
    language: {
      baseName: "language",
      type: "string",
    },
    locations: {
      baseName: "locations",
      type: "Array<ScaRequestDataAttributesDependenciesItemsLocationsItems>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    packageManager: {
      baseName: "package_manager",
      type: "string",
    },
    purl: {
      baseName: "purl",
      type: "string",
    },
    reachableSymbolProperties: {
      baseName: "reachable_symbol_properties",
      type: "Array<ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems>",
    },
    version: {
      baseName: "version",
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
    return ScaRequestDataAttributesDependenciesItems.attributeTypeMap;
  }

  public constructor() {}
}
