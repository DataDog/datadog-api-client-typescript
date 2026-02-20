/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Organization handle attributes.
 */
export class GoogleChatOrganizationHandleResponseAttributes {
  /**
   * Organization handle name.
   */
  "name"?: string;
  /**
   * Google space display name.
   */
  "spaceDisplayName"?: string;
  /**
   * Google space resource name.
   */
  "spaceResourceName"?: string;

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
    name: {
      baseName: "name",
      type: "string",
    },
    spaceDisplayName: {
      baseName: "space_display_name",
      type: "string",
    },
    spaceResourceName: {
      baseName: "space_resource_name",
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
    return GoogleChatOrganizationHandleResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
