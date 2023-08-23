/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of user object returned by the API.
 */
export class NotebookAuthor {
  /**
   * Creation time of the user.
   */
  "createdAt"?: Date;
  /**
   * Whether the user is disabled.
   */
  "disabled"?: boolean;
  /**
   * Email of the user.
   */
  "email"?: string;
  /**
   * Handle of the user.
   */
  "handle"?: string;
  /**
   * URL of the user's icon.
   */
  "icon"?: string;
  /**
   * Name of the user.
   */
  "name"?: string;
  /**
   * Status of the user.
   */
  "status"?: string;
  /**
   * Title of the user.
   */
  "title"?: string;
  /**
   * Whether the user is verified.
   */
  "verified"?: boolean;

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
    disabled: {
      type: "boolean",
    },
    email: {
      type: "string",
    },
    handle: {
      type: "string",
    },
    icon: {
      type: "string",
    },
    name: {
      type: "string",
    },
    status: {
      type: "string",
    },
    title: {
      type: "string",
    },
    verified: {
      type: "boolean",
    },
  };
}
