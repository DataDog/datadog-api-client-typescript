/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateUploadResponseDataAttributes } from "./CreateUploadResponseDataAttributes";
import { CreateUploadResponseDataType } from "./CreateUploadResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Upload ID and attributes of the created upload.
 */
export class CreateUploadResponseData {
  /**
   * Pre-signed URLs for uploading parts of the file.
   */
  "attributes"?: CreateUploadResponseDataAttributes;
  /**
   * Unique identifier for this upload. Use this ID when creating the reference table.
   */
  "id"?: string;
  /**
   * Upload resource type.
   */
  "type": CreateUploadResponseDataType;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateUploadResponseData.attributeTypeMap;
  }

  public constructor() {}
}
