/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration of the schema data to use.
 */
export class LogsSchemaData {
  /**
   * Class name of the schema to use.
   */
  "className": string;
  /**
   * Class UID of the schema to use.
   */
  "classUid": number;
  /**
   * Optional list of profiles to modify the schema.
   */
  "profiles"?: Array<string>;
  /**
   * Type of schema to use.
   */
  "schemaType": string;
  /**
   * Version of the schema to use.
   */
  "version": string;

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
    className: {
      baseName: "class_name",
      type: "string",
      required: true,
    },
    classUid: {
      baseName: "class_uid",
      type: "number",
      required: true,
      format: "int64",
    },
    profiles: {
      baseName: "profiles",
      type: "Array<string>",
    },
    schemaType: {
      baseName: "schema_type",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
      type: "string",
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
    return LogsSchemaData.attributeTypeMap;
  }

  public constructor() {}
}
