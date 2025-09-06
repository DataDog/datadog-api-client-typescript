/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BulkPutAppsDatastoreItemsRequestData } from "./BulkPutAppsDatastoreItemsRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to insert multiple items into a datastore in a single operation.
 */
export class BulkPutAppsDatastoreItemsRequest {
  /**
   * Data wrapper containing the items to insert and their configuration for the bulk insert operation.
   */
  "data"?: BulkPutAppsDatastoreItemsRequestData;

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
    data: {
      baseName: "data",
      type: "BulkPutAppsDatastoreItemsRequestData",
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
    return BulkPutAppsDatastoreItemsRequest.attributeTypeMap;
  }

  public constructor() {}
}
