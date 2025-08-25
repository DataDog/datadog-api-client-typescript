/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AlertEventAttributesLinksItemCategory } from "./AlertEventAttributesLinksItemCategory";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A link.
 */
export class AlertEventAttributesLinksItem {
  /**
   * The category of the link.
   */
  "category"?: AlertEventAttributesLinksItemCategory;
  /**
   * The display text of the link.
   */
  "title"?: string;
  /**
   * The URL of the link.
   */
  "url"?: string;

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
      type: "AlertEventAttributesLinksItemCategory",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
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
    return AlertEventAttributesLinksItem.attributeTypeMap;
  }

  public constructor() {}
}
