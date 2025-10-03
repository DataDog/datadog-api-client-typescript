/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateUploadResponseDataAttributes } from "./CreateUploadResponseDataAttributes";
import { CreateUploadResponseDataType } from "./CreateUploadResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `CreateUploadResponseData` object.
 */
export class CreateUploadResponseData {
  /**
   * The definition of `CreateUploadResponseDataAttributes` object.
   */
  "attributes"?: CreateUploadResponseDataAttributes;
  /**
   * The ID of the upload.
   */
  "id"?: string;
  /**
   * Upload resource type.
   */
  "type": CreateUploadResponseDataType;

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
      type: "CreateUploadResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CreateUploadResponseDataType",
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
    return CreateUploadResponseData.attributeTypeMap;
  }

  public constructor() {}
}
