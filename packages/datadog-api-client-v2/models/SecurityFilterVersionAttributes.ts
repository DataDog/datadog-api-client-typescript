/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFilterVersionEntry } from "./SecurityFilterVersionEntry";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes describing a single security filter configuration version.
 */
export class SecurityFilterVersionAttributes {
  /**
   * The Unix timestamp in milliseconds at which this configuration version was applied.
   */
  "date": number;
  /**
   * The set of security filters at this configuration version.
   */
  "filters": Array<SecurityFilterVersionEntry>;
  /**
   * The configuration version number.
   */
  "version": number;

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
    date: {
      baseName: "date",
      type: "number",
      required: true,
      format: "int64",
    },
    filters: {
      baseName: "filters",
      type: "Array<SecurityFilterVersionEntry>",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int32",
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
    return SecurityFilterVersionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
