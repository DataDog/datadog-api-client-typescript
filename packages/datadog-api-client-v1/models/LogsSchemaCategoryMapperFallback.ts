/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Used to override hardcoded category values with a value pulled from a source attribute on the log.
 */
export class LogsSchemaCategoryMapperFallback {
  /**
   * Fallback sources used to populate value of field.
   */
  "sources"?: { [key: string]: Array<string> };
  /**
   * Values that define when the fallback is used.
   */
  "values"?: { [key: string]: string };

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
    sources: {
      baseName: "sources",
      type: "{ [key: string]: Array<string>; }",
    },
    values: {
      baseName: "values",
      type: "{ [key: string]: string; }",
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
    return LogsSchemaCategoryMapperFallback.attributeTypeMap;
  }

  public constructor() {}
}
