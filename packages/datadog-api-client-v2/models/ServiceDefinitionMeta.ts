/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionMetaWarnings } from "./ServiceDefinitionMetaWarnings";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  };
}
