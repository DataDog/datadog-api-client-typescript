/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateAppRequestDataAttributes } from "./UpdateAppRequestDataAttributes";
import { UpdateAppRequestDataType } from "./UpdateAppRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `UpdateAppRequestData` object.
 */
export class UpdateAppRequestData {
  /**
   * The definition of `UpdateAppRequestDataAttributes` object.
   */
  "attributes"?: UpdateAppRequestDataAttributes;
  /**
   * The `data` `id`.
   */
  "id"?: string;
  /**
   * The definition of `UpdateAppRequestDataType` object.
   */
  "type": UpdateAppRequestDataType;

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
      type: "UpdateAppRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UpdateAppRequestDataType",
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
    return UpdateAppRequestData.attributeTypeMap;
  }

  public constructor() {}
}
