/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of Entity V3 Metadata Links Items object.
 */
export class EntityV3MetadataLinksItems {
  /**
   * Link name
   */
  "name": string;
  /**
   * Link provider.
   */
  "provider"?: string;
  /**
   * Link type.
   */
  "type": string;
  /**
   * Link url
   */
  "url": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    provider: {
      baseName: "provider",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    url: {
      baseName: "url",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3MetadataLinksItems.attributeTypeMap;
  }

  public constructor() {}
}
