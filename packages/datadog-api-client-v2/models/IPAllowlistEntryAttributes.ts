/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the IP allowlist entry.
 */
export class IPAllowlistEntryAttributes {
  /**
   * The CIDR block describing the IP range of the entry.
   */
  "cidrBlock"?: string;
  /**
   * Creation time of the entry.
   */
  "createdAt"?: Date;
  /**
   * Time of last entry modification.
   */
  "modifiedAt"?: Date;
  /**
   * A note describing the IP allowlist entry.
   */
  "note"?: string;

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
    cidrBlock: {
      baseName: "cidr_block",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    note: {
      baseName: "note",
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
    return IPAllowlistEntryAttributes.attributeTypeMap;
  }

  public constructor() {}
}
