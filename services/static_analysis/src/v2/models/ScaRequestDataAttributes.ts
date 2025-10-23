import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScaRequestDataAttributesCommit } from "./ScaRequestDataAttributesCommit";
import { ScaRequestDataAttributesDependenciesItems } from "./ScaRequestDataAttributesDependenciesItems";
import { ScaRequestDataAttributesFilesItems } from "./ScaRequestDataAttributesFilesItems";
import { ScaRequestDataAttributesRelationsItems } from "./ScaRequestDataAttributesRelationsItems";
import { ScaRequestDataAttributesRepository } from "./ScaRequestDataAttributesRepository";
import { ScaRequestDataAttributesVulnerabilitiesItems } from "./ScaRequestDataAttributesVulnerabilitiesItems";

/**
 * The definition of `ScaRequestDataAttributes` object.
 */
export class ScaRequestDataAttributes {
  /**
   * The definition of `ScaRequestDataAttributesCommit` object.
   */
  "commit"?: ScaRequestDataAttributesCommit;
  /**
   * The `attributes` `dependencies`.
   */
  "dependencies"?: Array<ScaRequestDataAttributesDependenciesItems>;
  /**
   * The `attributes` `env`.
   */
  "env"?: string;
  /**
   * The `attributes` `files`.
   */
  "files"?: Array<ScaRequestDataAttributesFilesItems>;
  /**
   * The `attributes` `relations`.
   */
  "relations"?: Array<ScaRequestDataAttributesRelationsItems>;
  /**
   * The definition of `ScaRequestDataAttributesRepository` object.
   */
  "repository"?: ScaRequestDataAttributesRepository;
  /**
   * The `attributes` `service`.
   */
  "service"?: string;
  /**
   * The `attributes` `tags`.
   */
  "tags"?: { [key: string]: string };
  /**
   * The `attributes` `vulnerabilities`.
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
