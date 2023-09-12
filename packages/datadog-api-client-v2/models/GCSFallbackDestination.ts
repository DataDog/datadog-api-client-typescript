/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCSFallbackDestinationIntegration } from "./GCSFallbackDestinationIntegration";
import { GCSFallbackDestinationType } from "./GCSFallbackDestinationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The GCS archive destination.
 */
export class GCSFallbackDestination {
  /**
   * The bucket where the archive will be stored.
   */
  "bucket": string;
  /**
   * The GCS archive's integration destination.
   */
  "integration": GCSFallbackDestinationIntegration;
  /**
   * The archive path.
   */
  "path"?: string;
  /**
   * Type of the GCS archive destination.
   */
  "type": GCSFallbackDestinationType;

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
      type: "GCSFallbackDestinationIntegration",
      required: true,
    },
    path: {
      baseName: "path",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GCSFallbackDestinationType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GCSFallbackDestination.attributeTypeMap;
  }

  public constructor() {}
}
