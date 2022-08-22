/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * RUM application attributes.
 */
export class RUMApplicationAttributes {
  /**
   * ID of the RUM application.
   */
  "applicationId": string;
  /**
   * Timestamp in ms of the creation date.
   */
  "createdAt": number;
  /**
   * Handle of the creator user.
   */
  "createdByHandle": string;
  /**
   * Client token of the RUM application.
   */
  "hash"?: string;
  /**
   * Name of the RUM application.
   */
  "name": string;
  /**
   * Org ID of the RUM application.
   */
  "orgId": number;
  /**
   * Type of the RUM application. Supported values are `browser`, `ios`, `android`, `react-native`, `flutter`.
   */
  "type": string;
  /**
   * Timestamp in ms of the last update date.
   */
  "updatedAt": number;
  /**
   * Handle of the updater user.
   */
  "updatedByHandle": string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    applicationId: {
      baseName: "application_id",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "number",
      required: true,
      format: "int64",
    },
    createdByHandle: {
      baseName: "created_by_handle",
      type: "string",
      required: true,
    },
    hash: {
      baseName: "hash",
      type: "string",
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
      format: "int32",
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "number",
      required: true,
      format: "int64",
    },
    updatedByHandle: {
      baseName: "updated_by_handle",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMApplicationAttributes.attributeTypeMap;
  }

  public constructor() {}
}
