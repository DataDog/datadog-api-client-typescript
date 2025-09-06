/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateAppsDatastoreItemRequestDataAttributesItemChanges } from "./UpdateAppsDatastoreItemRequestDataAttributesItemChanges";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for updating a datastore item, including the item key and changes to apply.
 */
export class UpdateAppsDatastoreItemRequestDataAttributes {
  /**
   * The unique identifier of the item being updated.
   */
  "id"?: string;
  /**
   * Changes to apply to a datastore item using set operations.
   */
  "itemChanges": UpdateAppsDatastoreItemRequestDataAttributesItemChanges;
  /**
   * The primary key that identifies the item to update. Cannot exceed 256 characters.
   */
  "itemKey": string;

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
    },
    itemChanges: {
      baseName: "item_changes",
      type: "UpdateAppsDatastoreItemRequestDataAttributesItemChanges",
      required: true,
    },
    itemKey: {
      baseName: "item_key",
      type: "string",
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
    return UpdateAppsDatastoreItemRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
