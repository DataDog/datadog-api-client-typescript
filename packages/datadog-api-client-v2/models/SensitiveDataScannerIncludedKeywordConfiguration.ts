/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object defining a set of keywords and a number of characters that help reduce noise.
 * You can provide a list of keywords you would like to check within a defined proximity of the matching pattern.
 * If any of the keywords are found within the proximity check, the match is kept.
 * If none are found, the match is discarded.
 */
export class SensitiveDataScannerIncludedKeywordConfiguration {
  /**
   * The number of characters behind a match detected by Sensitive Data Scanner to look for the keywords defined.
   * `character_count` should be greater than the maximum length of a keyword defined for a rule.
   */
  "characterCount": number;
  /**
   * Keyword list that will be checked during scanning in order to validate a match.
   * The number of keywords in the list must be less than or equal to 30.
   */
  "keywords": Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    characterCount: {
      baseName: "character_count",
      type: "number",
      required: true,
      format: "int64",
    },
    keywords: {
      baseName: "keywords",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerIncludedKeywordConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
