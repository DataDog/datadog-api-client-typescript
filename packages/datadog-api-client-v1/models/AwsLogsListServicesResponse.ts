/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * The list of current AWS services for which Datadog offers automatic log collection.
 */
export class AWSLogsListServicesResponse {
  /**
   * Key value in returned object.
   */
  "id"?: string;
  /**
   * Name of service available for configuration with Datadog logs.
   */
  "label"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
    },
    label: {
      baseName: "label",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSLogsListServicesResponse.attributeTypeMap;
  }

  public constructor() {}
}
