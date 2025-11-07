/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateUploadRequestDataAttributes } from "./CreateUploadRequestDataAttributes";
import { CreateUploadRequestDataType } from "./CreateUploadRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request data for creating an upload for a file to be ingested into a reference table.
 */
export class CreateUploadRequestData {
  /**
   * Upload configuration specifying how data is uploaded by the user, and properties of the table to associate the upload with.
   */
  "attributes"?: CreateUploadRequestDataAttributes;
  /**
   * Upload resource type.
   */
  "type": CreateUploadRequestDataType;

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
      type: "CreateUploadRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "CreateUploadRequestDataType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateUploadRequestData.attributeTypeMap;
  }

  public constructor() {}
}
