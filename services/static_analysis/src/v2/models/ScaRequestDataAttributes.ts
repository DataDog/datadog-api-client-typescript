import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScaRequestDataAttributesCommit } from "./ScaRequestDataAttributesCommit";
import { ScaRequestDataAttributesDependenciesItems } from "./ScaRequestDataAttributesDependenciesItems";
import { ScaRequestDataAttributesFilesItems } from "./ScaRequestDataAttributesFilesItems";
import { ScaRequestDataAttributesRelationsItems } from "./ScaRequestDataAttributesRelationsItems";
import { ScaRequestDataAttributesRepository } from "./ScaRequestDataAttributesRepository";
import { ScaRequestDataAttributesVulnerabilitiesItems } from "./ScaRequestDataAttributesVulnerabilitiesItems";

/**
 * The attributes of an SCA request, containing dependency graph data, vulnerability information, and repository context.
 */
export class ScaRequestDataAttributes {
  /**
   * Metadata about the commit associated with the SCA scan, including author, committer, and branch information.
   */
  "commit"?: ScaRequestDataAttributesCommit;
  /**
   * The list of dependencies discovered in the repository.
   */
  "dependencies"?: Array<ScaRequestDataAttributesDependenciesItems>;
  /**
   * The environment context in which the SCA scan was performed (e.g., production, staging).
   */
  "env"?: string;
  /**
   * The list of dependency manifest files found in the repository.
   */
  "files"?: Array<ScaRequestDataAttributesFilesItems>;
  /**
   * The dependency relations describing the inter-component dependency graph.
   */
  "relations"?: Array<ScaRequestDataAttributesRelationsItems>;
  /**
   * Information about the source code repository being analyzed.
   */
  "repository"?: ScaRequestDataAttributesRepository;
  /**
   * The name of the service or application being analyzed.
   */
  "service"?: string;
  /**
   * A map of key-value tags providing additional metadata for the SCA scan.
   */
  "tags"?: { [key: string]: string };
  /**
   * The list of vulnerabilities identified in the dependency graph.
   */
  "vulnerabilities"?: Array<ScaRequestDataAttributesVulnerabilitiesItems>;
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
    commit: {
      baseName: "commit",
      type: "ScaRequestDataAttributesCommit",
    },
    dependencies: {
      baseName: "dependencies",
      type: "Array<ScaRequestDataAttributesDependenciesItems>",
    },
    env: {
      baseName: "env",
      type: "string",
    },
    files: {
      baseName: "files",
      type: "Array<ScaRequestDataAttributesFilesItems>",
    },
    relations: {
      baseName: "relations",
      type: "Array<ScaRequestDataAttributesRelationsItems>",
    },
    repository: {
      baseName: "repository",
      type: "ScaRequestDataAttributesRepository",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "{ [key: string]: string; }",
    },
    vulnerabilities: {
      baseName: "vulnerabilities",
      type: "Array<ScaRequestDataAttributesVulnerabilitiesItems>",
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
    return ScaRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
