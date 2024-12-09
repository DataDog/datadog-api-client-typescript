/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeleteAppsResponseDataItemsType } from "./DeleteAppsResponseDataItemsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `DeleteAppsResponseDataItems` object.
 */
export class DeleteAppsResponseDataItems {
  /**
   * The `items` `id`.
   */
  "id": string;
  /**
   * The definition of `DeleteAppsResponseDataItemsType` object.
   */
  "type": DeleteAppsResponseDataItemsType;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DeleteAppsResponseDataItemsType",
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
    return DeleteAppsResponseDataItems.attributeTypeMap;
  }

  public constructor() {}
}
