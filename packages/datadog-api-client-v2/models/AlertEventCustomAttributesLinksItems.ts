/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AlertEventCustomAttributesLinksItemsCategory } from "./AlertEventCustomAttributesLinksItemsCategory";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A link.
 */
export class AlertEventCustomAttributesLinksItems {
  /**
   * The category of the link.
   */
  "category": AlertEventCustomAttributesLinksItemsCategory;
  /**
   * The display text of the link. Limited to 300 characters.
   */
  "title"?: string;
  /**
   * The URL of the link. Limited to 2048 characters.
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
    category: {
      baseName: "category",
      type: "AlertEventCustomAttributesLinksItemsCategory",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
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
    return AlertEventCustomAttributesLinksItems.attributeTypeMap;
  }

  public constructor() {}
}
