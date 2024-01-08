/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes object of a Cloudflare account.
 */
export class CloudflareAccountResponseAttributes {
  /**
   * The email associated with the Cloudflare account.
   */
  "email"?: string;
  /**
   * The name of the Cloudflare account.
   */
  "name": string;
  /**
   * An allowlist of resources to restrict pulling metrics for.
   */
  "resources"?: Array<string>;
  /**
   * An allowlist of zones to restrict pulling metrics for.
   */
  "zones"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    email: {
      baseName: "email",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    resources: {
      baseName: "resources",
      type: "Array<string>",
    },
    zones: {
      baseName: "zones",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudflareAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
