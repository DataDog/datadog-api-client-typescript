/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateAppsDatastoreFromImportRequestDataAttributes } from "./CreateAppsDatastoreFromImportRequestDataAttributes";
import { CreateAppsDatastoreFromImportRequestDataType } from "./CreateAppsDatastoreFromImportRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `CreateAppsDatastoreFromImportRequestData` object.
 */
export class CreateAppsDatastoreFromImportRequestData {
  /**
   * The definition of `CreateAppsDatastoreFromImportRequestDataAttributes` object.
   */
  "attributes"?: CreateAppsDatastoreFromImportRequestDataAttributes;
  /**
   * The `CreateAppsDatastoreFromImportRequestData` `id`.
   */
  "id"?: string;
  /**
   * Datastores resource type.
   */
  "type": CreateAppsDatastoreFromImportRequestDataType;

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
      type: "CreateAppsDatastoreFromImportRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CreateAppsDatastoreFromImportRequestDataType",
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
    return CreateAppsDatastoreFromImportRequestData.attributeTypeMap;
  }

  public constructor() {}
}
