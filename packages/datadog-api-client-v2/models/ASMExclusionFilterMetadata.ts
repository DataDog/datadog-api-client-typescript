/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata about the exclusion filter.
 */
export class ASMExclusionFilterMetadata {
  /**
   * The timestamp when the exclusion filter was added.
   */
  "addedAt"?: Date;
  /**
   * The email address of the user who added the exclusion filter.
   */
  "addedBy"?: string;
  /**
   * The timestamp when the exclusion filter was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * The email address of the user who last modified the exclusion filter.
   */
  "modifiedBy"?: string;

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
    addedAt: {
      baseName: "added_at",
      type: "Date",
      format: "date-time",
    },
    addedBy: {
      baseName: "added_by",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "string",
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
    return ASMExclusionFilterMetadata.attributeTypeMap;
  }

  public constructor() {}
}
