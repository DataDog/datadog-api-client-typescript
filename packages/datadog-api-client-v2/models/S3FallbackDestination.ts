/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { S3FallbackDestinationIntegration } from "./S3FallbackDestinationIntegration";
import { S3FallbackDestinationType } from "./S3FallbackDestinationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The S3 archive destination.
 */
export class S3FallbackDestination {
  /**
   * The bucket where the archive will be stored.
   */
  "bucket": string;
  /**
   * The S3 Archive's integration destination.
   */
  "integration": S3FallbackDestinationIntegration;
  /**
   * The archive path.
   */
  "path"?: string;
  /**
   * Type of the S3 archive destination.
   */
  "type": S3FallbackDestinationType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    bucket: {
      baseName: "bucket",
      type: "string",
      required: true,
    },
    integration: {
      baseName: "integration",
      type: "S3FallbackDestinationIntegration",
      required: true,
    },
    path: {
      baseName: "path",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "S3FallbackDestinationType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return S3FallbackDestination.attributeTypeMap;
  }

  public constructor() {}
}
