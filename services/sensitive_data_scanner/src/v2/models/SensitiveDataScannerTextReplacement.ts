import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerTextReplacementType } from "./SensitiveDataScannerTextReplacementType";

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
    type: {
      baseName: "type",
      type: "SensitiveDataScannerTextReplacementType",
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
    return SensitiveDataScannerTextReplacement.attributeTypeMap;
  }

  public constructor() {}
}
