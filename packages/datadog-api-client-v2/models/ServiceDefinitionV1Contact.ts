/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Contact information about the service.
 */
export class ServiceDefinitionV1Contact {
  /**
   * Service owner’s email.
   */
  "email"?: string;
  /**
   * Service owner’s Slack channel.
   */
  "slack"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    email: {
      baseName: "email",
      type: "string",
      format: "email",
    },
    slack: {
      baseName: "slack",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionV1Contact.attributeTypeMap;
  }

  public constructor() {}
}
