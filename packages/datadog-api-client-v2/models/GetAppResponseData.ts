/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetAppResponseDataAttributes } from "./GetAppResponseDataAttributes";
import { GetAppResponseDataType } from "./GetAppResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `GetAppResponseData` object.
 */
export class GetAppResponseData {
  /**
   * The definition of `GetAppResponseDataAttributes` object.
   */
  "attributes": GetAppResponseDataAttributes;
  /**
   * The `data` `id`.
   */
  "id": string;
  /**
   * The definition of `GetAppResponseDataType` object.
   */
  "type": GetAppResponseDataType;

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
      type: "GetAppResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GetAppResponseDataType",
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
    return GetAppResponseData.attributeTypeMap;
  }

  public constructor() {}
}
