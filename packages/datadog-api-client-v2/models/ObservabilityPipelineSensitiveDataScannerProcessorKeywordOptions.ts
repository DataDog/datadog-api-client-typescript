/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions` object.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions {
  /**
   * A list of keywords to match near the sensitive pattern.
   */
  "keywords": Array<string>;
  /**
   * Maximum number of tokens between a keyword and a sensitive value match.
   */
  "proximity": number;

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
    keywords: {
      baseName: "keywords",
      type: "Array<string>",
      required: true,
    },
    proximity: {
      baseName: "proximity",
      type: "number",
      required: true,
      format: "int64",
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
    return ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions.attributeTypeMap;
  }

  public constructor() {}
}
