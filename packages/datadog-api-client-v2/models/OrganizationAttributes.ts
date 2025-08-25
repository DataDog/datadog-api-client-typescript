/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the organization.
 */
export class OrganizationAttributes {
  /**
   * Creation time of the organization.
   */
  "createdAt"?: Date;
  /**
   * Description of the organization.
   */
  "description"?: string;
  /**
   * Whether or not the organization is disabled.
   */
  "disabled"?: boolean;
  /**
   * Time of last organization modification.
   */
  "modifiedAt"?: Date;
  /**
   * Name of the organization.
   */
  "name"?: string;
  /**
   * Public ID of the organization.
   */
  "publicId"?: string;
  /**
   * Sharing type of the organization.
   */
  "sharing"?: string;
  /**
   * URL of the site that this organization exists at.
   */
  "url"?: string;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    disabled: {
      baseName: "disabled",
      type: "boolean",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    sharing: {
      baseName: "sharing",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OrganizationAttributes.attributeTypeMap;
  }

  public constructor() {}
}
