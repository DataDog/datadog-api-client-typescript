/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UCConfigPairDataAttributes } from "./UCConfigPairDataAttributes";
import { UCConfigPairDataType } from "./UCConfigPairDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `UCConfigPairData` object.
 */
export class UCConfigPairData {
  /**
   * The definition of `UCConfigPairDataAttributes` object.
   */
  "attributes"?: UCConfigPairDataAttributes;
  /**
   * The `UCConfigPairData` `id`.
   */
  "id"?: string;
  /**
   * Azure UC configs resource type.
   */
  "type": UCConfigPairDataType;

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
      type: "UCConfigPairDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UCConfigPairDataType",
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
    return UCConfigPairData.attributeTypeMap;
  }

  public constructor() {}
}
