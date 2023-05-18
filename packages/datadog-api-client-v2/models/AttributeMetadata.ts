/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attribute Metadata.
 */
export class AttributeMetadata {
  /**
   * Silence monitors for expected GCE instance shutdowns.
   */
  "automute"?: boolean;
  /**
   * Your client email.
   */
  "clientEmail"?: string;
  /**
   * Your host filters.
   */
  "hostFilters"?: Array<string>;
  /**
   * When enabled, Datadog performs configuration checks across your Google Cloud environment by continuously scanning every resource.
   */
  "isCspmEnabled"?: boolean;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    automute: {
      baseName: "automute",
      type: "boolean",
    },
    clientEmail: {
      baseName: "client_email",
      type: "string",
    },
    hostFilters: {
      baseName: "host_filters",
      type: "Array<string>",
    },
    isCspmEnabled: {
      baseName: "is_cspm_enabled",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AttributeMetadata.attributeTypeMap;
  }

  public constructor() {}
}
