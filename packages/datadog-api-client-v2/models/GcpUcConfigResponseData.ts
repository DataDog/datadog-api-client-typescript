/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GcpUcConfigResponseDataAttributes } from "./GcpUcConfigResponseDataAttributes";
import { GcpUcConfigResponseDataType } from "./GcpUcConfigResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `GcpUcConfigResponseData` object.
 */
export class GcpUcConfigResponseData {
  /**
   * The definition of `GcpUcConfigResponseDataAttributes` object.
   */
  "attributes"?: GcpUcConfigResponseDataAttributes;
  /**
   * The `GcpUcConfigResponseData` `id`.
   */
  "id"?: string;
  /**
   * Google Cloud Usage Cost config resource type.
   */
  "type": GcpUcConfigResponseDataType;

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
      type: "GcpUcConfigResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GcpUcConfigResponseDataType",
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
    return GcpUcConfigResponseData.attributeTypeMap;
  }

  public constructor() {}
}
