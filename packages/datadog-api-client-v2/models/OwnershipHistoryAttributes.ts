/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OwnershipHistoryItem } from "./OwnershipHistoryItem";
import { OwnershipHistoryPagination } from "./OwnershipHistoryPagination";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of an ownership history response.
 */
export class OwnershipHistoryAttributes {
  /**
   * The list of history entries returned for this page.
   */
  "items": Array<OwnershipHistoryItem>;
  /**
   * Cursor-based pagination metadata for the history response.
   */
  "pagination": OwnershipHistoryPagination;

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
    items: {
      baseName: "items",
      type: "Array<OwnershipHistoryItem>",
      required: true,
    },
    pagination: {
      baseName: "pagination",
      type: "OwnershipHistoryPagination",
      required: true,
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
    return OwnershipHistoryAttributes.attributeTypeMap;
  }

  public constructor() {}
}
