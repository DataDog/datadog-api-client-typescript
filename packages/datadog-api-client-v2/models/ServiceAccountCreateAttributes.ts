/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the created user.
 */
export class ServiceAccountCreateAttributes {
  /**
   * The email of the user.
   */
  "email": string;
  /**
   * The name of the user.
   */
  "name"?: string;
  /**
   * Whether the user is a service account. Must be true.
   */
  "serviceAccount": boolean;
  /**
   * The title of the user.
   */
  "title"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    email: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
    },
    serviceAccount: {
      baseName: "service_account",
      type: "boolean",
      required: true,
    },
    title: {
      type: "string",
    },
  };
}
