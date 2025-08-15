/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateAppsDatastoreRequestDataAttributes } from "./UpdateAppsDatastoreRequestDataAttributes";
import { UpdateAppsDatastoreRequestDataType } from "./UpdateAppsDatastoreRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `UpdateAppsDatastoreRequestData` object.
 */
export class UpdateAppsDatastoreRequestData {
  /**
   * The definition of `UpdateAppsDatastoreRequestDataAttributes` object.
   */
  "attributes"?: UpdateAppsDatastoreRequestDataAttributes;
  /**
   * The `UpdateAppsDatastoreRequestData` `id`.
   */
  "id"?: string;
  /**
   * Datastores resource type.
   */
  "type": UpdateAppsDatastoreRequestDataType;

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
      type: "UpdateAppsDatastoreRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UpdateAppsDatastoreRequestDataType",
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
    return UpdateAppsDatastoreRequestData.attributeTypeMap;
  }

  public constructor() {}
}
