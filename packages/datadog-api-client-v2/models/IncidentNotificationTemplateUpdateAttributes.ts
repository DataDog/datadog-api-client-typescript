/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes to update on a notification template.
 */
export class IncidentNotificationTemplateUpdateAttributes {
  /**
   * The category of the notification template.
   */
  "category"?: string;
  /**
   * The content body of the notification template.
   */
  "content"?: string;
  /**
   * The name of the notification template.
   */
  "name"?: string;
  /**
   * The subject line of the notification template.
   */
  "subject"?: string;

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
    category: {
      baseName: "category",
      type: "string",
    },
    content: {
      baseName: "content",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    subject: {
      baseName: "subject",
      type: "string",
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
    return IncidentNotificationTemplateUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
