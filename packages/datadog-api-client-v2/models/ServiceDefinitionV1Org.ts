/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Org related information about the service.
 */
export class ServiceDefinitionV1Org {
  /**
   * App feature this service supports.
   */
  "application"?: string;
  /**
   * Team that owns the service.
   */
  "team"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    application: {
      baseName: "application",
      type: "string",
    },
    team: {
      baseName: "team",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionV1Org.attributeTypeMap;
  }

  public constructor() {}
}
