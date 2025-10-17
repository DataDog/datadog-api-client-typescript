/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsSchemaData } from "./LogsSchemaData";
import { LogsSchemaMapper } from "./LogsSchemaMapper";
import { LogsSchemaProcessorType } from "./LogsSchemaProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A processor that has additional validations and checks for a given schema. Currently supported schema types include OCSF.
 */
export class LogsSchemaProcessor {
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * The `LogsSchemaProcessor` `mappers`.
   */
  "mappers": Array<LogsSchemaMapper>;
  /**
   * Name of the processor.
   */
  "name": string;
  /**
   * Configuration of the schema data to use.
   */
  "schema": LogsSchemaData;
  /**
   * Type of logs schema processor.
   */
  "type": LogsSchemaProcessorType;

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
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    mappers: {
      baseName: "mappers",
      type: "Array<LogsSchemaMapper>",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    schema: {
      baseName: "schema",
      type: "LogsSchemaData",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsSchemaProcessorType",
      required: true,
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
    return LogsSchemaProcessor.attributeTypeMap;
  }

  public constructor() {}
}
