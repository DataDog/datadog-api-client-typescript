/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object for an organization's custom frameworks.
 */
export class CustomFrameworkMetadata {
  /**
   * Framework Creation Date
   */
  "createdAt"?: number;
  /**
   * Framework Creator
   */
  "createdBy"?: string;
  /**
   * Framework Description
   */
  "description"?: string;
  /**
   * Framework Handle
   */
  "handle": string;
  /**
   * Framework Icon URL
   */
  "iconUrl"?: string;
  /**
   * Custom Framework ID
   */
  "id": string;
  /**
   * Framework Name
   */
  "name": string;
  /**
   * Org ID
   */
  "orgId": number;
  /**
   * Framework Update Date
   */
  "updatedAt"?: number;
  /**
   * Framework Version
   */
  "version": string;

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
      type: "number",
      format: "int64",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    handle: {
      baseName: "handle",
      type: "string",
      required: true,
    },
    iconUrl: {
      baseName: "icon_url",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "number",
      format: "int64",
    },
    version: {
      baseName: "version",
      type: "string",
      required: true,
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
    return CustomFrameworkMetadata.attributeTypeMap;
  }

  public constructor() {}
}
