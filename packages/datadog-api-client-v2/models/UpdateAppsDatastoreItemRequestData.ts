/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateAppsDatastoreItemRequestDataAttributes } from "./UpdateAppsDatastoreItemRequestDataAttributes";
import { UpdateAppsDatastoreItemRequestDataType } from "./UpdateAppsDatastoreItemRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data wrapper containing the item identifier and the changes to apply during the update operation.
 */
export class UpdateAppsDatastoreItemRequestData {
  /**
   * Attributes for updating a datastore item, including the item key and changes to apply.
   */
  "attributes"?: UpdateAppsDatastoreItemRequestDataAttributes;
  /**
   * The unique identifier of the datastore item.
   */
  "id"?: string;
  /**
   * The resource type for datastore items.
   */
  "type": UpdateAppsDatastoreItemRequestDataType;

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
    attributes: {
      baseName: "attributes",
      type: "UpdateAppsDatastoreItemRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UpdateAppsDatastoreItemRequestDataType",
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
    return UpdateAppsDatastoreItemRequestData.attributeTypeMap;
  }

  public constructor() {}
}
