/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IPAllowlistEntryAttributes } from "./IPAllowlistEntryAttributes";
import { IPAllowlistEntryType } from "./IPAllowlistEntryType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the IP allowlist entry object.
 */
export class IPAllowlistEntryData {
  /**
   * Attributes of the IP allowlist entry.
   */
  "attributes"?: IPAllowlistEntryAttributes;
  /**
   * The unique identifier of the IP allowlist entry.
   */
  "id"?: string;
  /**
   * IP allowlist Entry type.
   */
  "type": IPAllowlistEntryType;

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
    attributes: {
      baseName: "attributes",
      type: "IPAllowlistEntryAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "IPAllowlistEntryType",
      required: true,
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
    return IPAllowlistEntryData.attributeTypeMap;
  }

  public constructor() {}
}
