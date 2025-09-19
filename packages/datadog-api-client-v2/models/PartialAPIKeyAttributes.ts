/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a partial API key.
 */
export class PartialAPIKeyAttributes {
  /**
   * The category of the API key.
   */
  "category"?: string;
  /**
   * Creation date of the API key.
   */
  "createdAt"?: string;
  /**
   * Date the API Key was last used.
   */
  "dateLastUsed"?: Date;
  /**
   * The last four characters of the API key.
   */
  "last4"?: string;
  /**
   * Date the API key was last modified.
   */
  "modifiedAt"?: string;
  /**
   * Name of the API key.
   */
  "name"?: string;
  /**
   * The remote config read enabled status.
   */
  "remoteConfigReadEnabled"?: boolean;

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
    createdAt: {
      baseName: "created_at",
      type: "string",
    },
    dateLastUsed: {
      baseName: "date_last_used",
      type: "Date",
      format: "date-time",
    },
    last4: {
      baseName: "last4",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    remoteConfigReadEnabled: {
      baseName: "remote_config_read_enabled",
      type: "boolean",
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
    return PartialAPIKeyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
