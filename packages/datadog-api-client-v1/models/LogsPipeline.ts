/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsFilter } from "./LogsFilter";
import { LogsProcessor } from "./LogsProcessor";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Pipelines and processors operate on incoming logs,
 * parsing and transforming them into structured attributes for easier querying.
 *
 * **Note**: These endpoints are only available for admin users.
 * Make sure to use an application key created by an admin.
 */
export class LogsPipeline {
  /**
   * Filter for logs.
   */
  "filter"?: LogsFilter;
  /**
   * ID of the pipeline.
   */
  "id"?: string;
  /**
   * Whether or not the pipeline is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Whether or not the pipeline can be edited.
   */
  "isReadOnly"?: boolean;
  /**
   * Name of the pipeline.
   */
  "name": string;
  /**
   * Ordered list of processors in this pipeline.
   */
  "processors"?: Array<LogsProcessor>;
  /**
   * Type of pipeline.
   */
  "type"?: string;

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
    filter: {
      baseName: "filter",
      type: "LogsFilter",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    isReadOnly: {
      baseName: "is_read_only",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    processors: {
      baseName: "processors",
      type: "Array<LogsProcessor>",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsPipeline.attributeTypeMap;
  }

  public constructor() {}
}
