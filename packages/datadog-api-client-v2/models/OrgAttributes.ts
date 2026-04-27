/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an organization.
 */
export class OrgAttributes {
  /**
   * The creation timestamp of the organization.
   */
  "createdAt": Date;
  /**
   * A description of the organization.
   */
  "description": string;
  /**
   * Whether the organization is disabled.
   */
  "disabled": boolean;
  /**
   * The last modification timestamp of the organization.
   */
  "modifiedAt": Date;
  /**
   * The name of the organization.
   */
  "name": string;
  /**
   * The public identifier of the organization.
   */
  "publicId": string;
  /**
   * The sharing setting of the organization.
   */
  "sharing": string;
  /**
   * The URL of the organization.
   */
  "url": string;

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
      required: true,
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    disabled: {
      baseName: "disabled",
      type: "boolean",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    publicId: {
      baseName: "public_id",
      type: "string",
      required: true,
    },
    sharing: {
      baseName: "sharing",
      type: "string",
      required: true,
    },
    url: {
      baseName: "url",
      type: "string",
      required: true,
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
    return OrgAttributes.attributeTypeMap;
  }

  public constructor() {}
}
