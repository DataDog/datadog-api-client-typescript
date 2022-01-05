/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AWSLogsAsyncError } from "./AWSLogsAsyncError";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * A list of all Datadog-AWS logs integrations available in your Datadog organization.
 */

export class AWSLogsAsyncResponse {
  /**
   * List of errors.
   */
  "errors"?: Array<AWSLogsAsyncError>;
  /**
   * Status of the properties.
   */
  "status"?: string;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    errors: {
      baseName: "errors",
      type: "Array<AWSLogsAsyncError>",
    },
    status: {
      baseName: "status",
      type: "string",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSLogsAsyncResponse.attributeTypeMap;
  }

  public constructor() {}
}
