/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IPAllowlistAttributes } from "./IPAllowlistAttributes";
import { IPAllowlistType } from "./IPAllowlistType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * IP allowlist data.
 */
export class IPAllowlistData {
  /**
   * Attributes of the IP allowlist.
   */
  "attributes"?: IPAllowlistAttributes;
  /**
   * The unique identifier of the org.
   */
  "id"?: string;
  /**
   * IP allowlist type.
   */
  "type": IPAllowlistType;

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
      type: "IPAllowlistAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "IPAllowlistType",
      required: true,
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
    return IPAllowlistData.attributeTypeMap;
  }

  public constructor() {}
}
