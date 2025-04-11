import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceDefinitionMetaWarnings } from "./ServiceDefinitionMetaWarnings";

/**
 * Metadata about a service definition.
 */
export class ServiceDefinitionMeta {
  /**
   * GitHub HTML URL.
   */
  "githubHtmlUrl"?: string;
  /**
   * Ingestion schema version.
   */
  "ingestedSchemaVersion"?: string;
  /**
   * Ingestion source of the service definition.
   */
  "ingestionSource"?: string;
  /**
   * Last modified time of the service definition.
   */
  "lastModifiedTime"?: string;
  /**
   * User defined origin of the service definition.
   */
  "origin"?: string;
  /**
   * User defined origin's detail of the service definition.
   */
  "originDetail"?: string;
  /**
   * A list of schema validation warnings.
   */
  "warnings"?: Array<ServiceDefinitionMetaWarnings>;
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
    githubHtmlUrl: {
      baseName: "github-html-url",
      type: "string",
    },
    ingestedSchemaVersion: {
      baseName: "ingested-schema-version",
      type: "string",
    },
    ingestionSource: {
      baseName: "ingestion-source",
      type: "string",
    },
    lastModifiedTime: {
      baseName: "last-modified-time",
      type: "string",
    },
    origin: {
      baseName: "origin",
      type: "string",
    },
    originDetail: {
      baseName: "origin-detail",
      type: "string",
    },
    warnings: {
      baseName: "warnings",
      type: "Array<ServiceDefinitionMetaWarnings>",
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
    return ServiceDefinitionMeta.attributeTypeMap;
  }

  public constructor() {}
}
