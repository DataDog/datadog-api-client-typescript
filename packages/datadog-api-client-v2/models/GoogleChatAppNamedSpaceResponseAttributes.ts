/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Google Chat space attributes.
 */
export class GoogleChatAppNamedSpaceResponseAttributes {
  /**
   * Google space display name.
   */
  "displayName"?: string;
  /**
   * Organization binding ID.
   */
  "organizationBindingId"?: string;
  /**
   * Google space resource name.
   */
  "resourceName"?: string;
  /**
   * Google space URI.
   */
  "spaceUri"?: string;

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
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    organizationBindingId: {
      baseName: "organization_binding_id",
      type: "string",
    },
    resourceName: {
      baseName: "resource_name",
      type: "string",
    },
    spaceUri: {
      baseName: "space_uri",
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
    return GoogleChatAppNamedSpaceResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
