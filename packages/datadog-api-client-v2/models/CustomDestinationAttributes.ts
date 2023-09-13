/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationCompressionType } from "./CustomDestinationCompressionType";
import { CustomDestinationFallbackDestination } from "./CustomDestinationFallbackDestination";
import { CustomDestinationForwarderDestination } from "./CustomDestinationForwarderDestination";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The custom destination attributes.
 */
export class CustomDestinationAttributes {
  /**
   * The max amount of bytes to buffer for the custom destination.
   */
  "bufferMaxBytes"?: number;
  /**
   * The timeout amount in seconds to buffer for the custom destination.
   */
  "bufferTimeoutSeconds"?: number;
  /**
   * The compression method used for the custom destination.
   */
  "compression"?: CustomDestinationCompressionType;
  /**
   * The enabled status of the custom destination.
   */
  "enabled"?: boolean;
  /**
   * The archiving destination to fall back to.
   */
  "fallbackDestination"?: CustomDestinationFallbackDestination;
  /**
   * The destination to forward events to.
   */
  "forwarderDestination": CustomDestinationForwarderDestination;
  /**
   * The retry duration in seconds for the custom destination.
   */
  "maxRetryDurationSeconds"?: number;
  /**
   * The name of the custom destination.
   */
  "name": string;
  /**
   * The search query of the custom destination.
   */
  "query"?: string;
  /**
   * The version of the custom destination to prevent concurrent changes.
   */
  "version": number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    bufferMaxBytes: {
      baseName: "bufferMaxBytes",
      type: "number",
      format: "int64",
    },
    bufferTimeoutSeconds: {
      baseName: "bufferTimeoutSeconds",
      type: "number",
      format: "int64",
    },
    compression: {
      baseName: "compression",
      type: "CustomDestinationCompressionType",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    fallbackDestination: {
      baseName: "fallbackDestination",
      type: "CustomDestinationFallbackDestination",
    },
    forwarderDestination: {
      baseName: "forwarderDestination",
      type: "CustomDestinationForwarderDestination",
      required: true,
    },
    maxRetryDurationSeconds: {
      baseName: "maxRetryDurationSeconds",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomDestinationAttributes.attributeTypeMap;
  }

  public constructor() {}
}
