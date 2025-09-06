/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateAppsDatastoreRequestDataAttributes } from "./CreateAppsDatastoreRequestDataAttributes";
import { DatastoreDataType } from "./DatastoreDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data wrapper containing the configuration needed to create a new datastore.
 */
export class CreateAppsDatastoreRequestData {
  /**
   * Configuration and metadata to create a new datastore.
   */
  "attributes"?: CreateAppsDatastoreRequestDataAttributes;
  /**
   * Optional ID for the new datastore. If not provided, one will be generated automatically.
   */
  "id"?: string;
  /**
   * The resource type for datastores.
   */
  "type": DatastoreDataType;

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
      type: "CreateAppsDatastoreRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DatastoreDataType",
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
    return CreateAppsDatastoreRequestData.attributeTypeMap;
  }

  public constructor() {}
}
