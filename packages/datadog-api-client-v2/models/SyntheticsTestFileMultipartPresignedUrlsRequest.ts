/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestFileMultipartPresignedUrlsPart } from "./SyntheticsTestFileMultipartPresignedUrlsPart";
import { SyntheticsTestFileMultipartPresignedUrlsRequestBucketKeyPrefix } from "./SyntheticsTestFileMultipartPresignedUrlsRequestBucketKeyPrefix";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for getting presigned URLs for a multipart file upload.
 */
export class SyntheticsTestFileMultipartPresignedUrlsRequest {
  /**
   * The bucket key prefix indicating the type of file upload.
   */
  "bucketKeyPrefix": SyntheticsTestFileMultipartPresignedUrlsRequestBucketKeyPrefix;
  /**
   * Array of part descriptors for the multipart upload.
   */
  "parts": Array<SyntheticsTestFileMultipartPresignedUrlsPart>;

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
    bucketKeyPrefix: {
      baseName: "bucketKeyPrefix",
      type: "SyntheticsTestFileMultipartPresignedUrlsRequestBucketKeyPrefix",
      required: true,
    },
    parts: {
      baseName: "parts",
      type: "Array<SyntheticsTestFileMultipartPresignedUrlsPart>",
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
    return SyntheticsTestFileMultipartPresignedUrlsRequest.attributeTypeMap;
  }

  public constructor() {}
}
