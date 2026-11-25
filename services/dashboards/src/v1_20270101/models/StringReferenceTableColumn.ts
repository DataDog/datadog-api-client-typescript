import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExcludeNullTableColumnFunction } from "./ExcludeNullTableColumnFunction";
import { StringReferenceTableColumnReference } from "./StringReferenceTableColumnReference";
import { StringReferenceTableColumnType } from "./StringReferenceTableColumnType";
import { StringTableColumnFormat } from "./StringTableColumnFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StringReferenceTableColumn {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "format": StringTableColumnFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "functions"?: Array<ExcludeNullTableColumnFunction>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "isHidden"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "reference": StringReferenceTableColumnReference;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": StringReferenceTableColumnType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alias: {
      baseName: "alias",
      type: "string",
    },
    format: {
      baseName: "format",
      type: "StringTableColumnFormat",
      required: true,
    },
    functions: {
      baseName: "functions",
      type: "Array<ExcludeNullTableColumnFunction>",
    },
    isHidden: {
      baseName: "is_hidden",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    reference: {
      baseName: "reference",
      type: "StringReferenceTableColumnReference",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StringReferenceTableColumnType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StringReferenceTableColumn.attributeTypeMap;
  }

  public constructor() {}
}
