/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateAppResponseDataAttributes } from "./UpdateAppResponseDataAttributes";
import { UpdateAppResponseDataType } from "./UpdateAppResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `UpdateAppResponseData` object.
 */
export class UpdateAppResponseData {
  /**
   * The definition of `UpdateAppResponseDataAttributes` object.
   */
  "attributes": UpdateAppResponseDataAttributes;
  /**
   * The `data` `id`.
   */
  "id": string;
  /**
   * The definition of `UpdateAppResponseDataType` object.
   */
  "type": UpdateAppResponseDataType;

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
      type: "UpdateAppResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UpdateAppResponseDataType",
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
    return UpdateAppResponseData.attributeTypeMap;
  }

  public constructor() {}
}
