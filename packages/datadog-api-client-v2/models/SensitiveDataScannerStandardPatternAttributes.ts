/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the Sensitive Data Scanner standard pattern.
 */
export class SensitiveDataScannerStandardPatternAttributes {
  /**
   * Description of the standard pattern.
   */
  "description"?: string;
  /**
   * Name of the standard pattern.
   */
  "name"?: string;
  /**
   * Regex to match.
   */
  "pattern"?: string;
  /**
   * List of tags.
   */
  "tags"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      type: "string",
    },
    name: {
      type: "string",
    },
    pattern: {
      type: "string",
    },
    tags: {
      type: "Array<string>",
    },
  };
}
