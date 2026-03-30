/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestFileCompleteMultipartUploadPart } from "./SyntheticsTestFileCompleteMultipartUploadPart";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for completing a multipart file upload.
 */
export class SyntheticsTestFileCompleteMultipartUploadRequest {
  /**
   * The full storage path for the uploaded file.
   */
  "key": string;
  /**
   * Array of completed parts with their ETags.
   */
  "parts": Array<SyntheticsTestFileCompleteMultipartUploadPart>;
  /**
   * The upload ID returned when the multipart upload was initiated.
   */
  "uploadId": string;

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
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    parts: {
      baseName: "parts",
      type: "Array<SyntheticsTestFileCompleteMultipartUploadPart>",
      required: true,
    },
    uploadId: {
      baseName: "uploadId",
      type: "string",
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
    return SyntheticsTestFileCompleteMultipartUploadRequest.attributeTypeMap;
  }

  public constructor() {}
}
