/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerTextReplacementType } from "./SensitiveDataScannerTextReplacementType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing how the scanned event will be replaced.
 */
export class SensitiveDataScannerTextReplacement {
  /**
   * Required if type == 'partial_replacement_from_beginning'
   * or 'partial_replacement_from_end'. It must be > 0.
   */
  "numberOfChars"?: number;
  /**
   * Required if type == 'replacement_string'.
   */
  "replacementString"?: string;
  /**
   * Only valid when type == `replacement_string`. When enabled, matches can be unmasked in logs by users with ‘Data Scanner Unmask’ permission. As a security best practice, avoid masking for highly-sensitive, long-lived data.
   */
  "shouldSaveMatch"?: boolean;
  /**
   * Type of the replacement text. None means no replacement.
   * hash means the data will be stubbed. replacement_string means that
   * one can chose a text to replace the data. partial_replacement_from_beginning
   * allows a user to partially replace the data from the beginning, and
   * partial_replacement_from_end on the other hand, allows to replace data from
   * the end.
   */
  "type"?: SensitiveDataScannerTextReplacementType;

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
    numberOfChars: {
      baseName: "number_of_chars",
      type: "number",
      format: "int64",
    },
    replacementString: {
      baseName: "replacement_string",
      type: "string",
    },
    shouldSaveMatch: {
      baseName: "should_save_match",
      type: "boolean",
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerTextReplacementType",
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
    return SensitiveDataScannerTextReplacement.attributeTypeMap;
  }

  public constructor() {}
}
